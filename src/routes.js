const route = require('express').Router()
const pollController = require('./controllers/pollController')

route.get('/', (req, res) => res.send("Bem vindo a API do YourPoll!"))

route.get('/poll', (req, res) => pollController.getPolls(req, res))

route.post('/poll/register', (req, res) => pollController.addPoll(res, req.body))

route.delete('/poll/delete/:id', (req, res) => pollController.removePoll(req.params, res))

module.exports = route