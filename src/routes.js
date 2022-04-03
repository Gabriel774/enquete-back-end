const routes = require('express').Router()
const pollController = require('./controllers/pollController')

routes.get('/', (req, res) => res.send("Bem vindo a API."))

routes.get('/poll', (req, res) => res.send("Bem vindo a API."))

routes.post('/poll/register', (req, res) => pollController.addPoll(res, req.body))

module.exports = routes