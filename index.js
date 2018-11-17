const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()

app.use(bodyParser.json())
app.use(cors())

morgan.token('body', (req) => JSON.stringify(req.body))
app.use(morgan(function(tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.body(req),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
}))

app.use(express.static('build'))

app.get('/api/persons', (req, res) => {
  Person.find({})
    .then(people => people.map(Person.format))
    .then(people => res.send(people))
    .catch(error => {
      console.error(error)
      res.status(404).end()
    })
})

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id
  Person.findById(id)
    .then(person => {
      if(person) {
        res.json(Person.format(person))
      } else {
        res.status(404).end()
      }
    })
    .catch(error => {
      console.error(error)
      res.status(404).end()
    })
})

app.post('/api/persons', (req, res) => {
  const { name, number } = req.body
  if(!name || !number) {
    return res.status(400).json({ error: 'name or number is missing' })
  }
  Person.findOne({ name })
    .then(oldPerson => {
      if(oldPerson !== null) {
        return res.status(409).send({ error: 'person already exists' })
      }
      const person = new Person({
        name: req.body.name,
        number: req.body.number
      })
      return person.save()
    })
    .then(person => res.send(person))
    .catch(error => {
      console.error(error)
      res.status(404).end()
    })
})

app.put('/api/persons/:id', (req, res) => {
  const { name, number } = req.body
  if(!name || !number) {
    return res.status(400).json({ error: 'name or number is missing' })
  }
  const person = { name, number }
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then(updatedPerson => {
      res.json(Person.format(updatedPerson))
    })
    .catch(error => {
      console.error(error)
      res.status(400).send({ error: 'malformatted id' })
    })
})

app.delete('/api/persons/:id', (req, res) => {
  Person
    .findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end()
    })
    .catch(() => {
      res.status(400).send({ error: 'malformatted id' })
    })
})

app.get('/info', (req, res) => {
  Person.countDocuments({})
    .exec()
    .then(count => {
      const message = `<p>Puhelinluettelossa ${count} henkilön tiedot</p>
      ${new Date().toISOString()} `
      return res.send(message)
    })
    .catch(error => {
      console.error(error)
      res.status(404).end()
    })
})

const error = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

app.use(error)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
