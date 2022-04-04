const route = require('express').Router()
const pollController = require('./controllers/pollController')

route.get('/', (_req, res) => res.send("Bem vindo a API do YourPoll!"))

route.get('/polls', (_req, res) => pollController.getPolls(res))

route.get('/polls/:id', (req, res) => pollController.getPoll(req.params.id, res))

route.post('/poll/register', (req, res) => pollController.addPoll(req.body, res))

route.delete('/poll/delete/:id', (req, res) => pollController.removePoll(req.params.id, res))

route.patch('/poll/edit', (req, res) => pollController.editPoll(req.body, res))

module.exports = route