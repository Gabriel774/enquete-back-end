const route = require('express').Router()
const pollController = require('./controllers/pollController')

route.get('/', (_req, res) => res.send("Bem vindo a API do YourPoll!"))

route.get('/poll', (_req, res) => pollController.getPolls(res))

route.post('/poll/register', (req, res) => pollController.addPoll(req.body, res))

route.delete('/poll/delete/:id', (req, res) => pollController.removePoll(req.params, res))

route.patch('/edit', (req, res) => pollController.editPoll(req.body, res))

module.exports = route