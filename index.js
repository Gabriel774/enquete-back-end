require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors({
    'Access-Control-Allow-Origin': '*'
}))

const mongoose = require('mongoose');

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({
    extended: true
}))

const routes = require('./src/routes')
app.use(routes)

app.use(express.json())

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD

mongoose.connect(
    `mongodb+srv://${user}:${password}@yourpoll.kk0ks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
).then(() => {
    app.listen(process.env.PORT || 5000)
    console.log('aplicação conectada ao banco de dados')
}).catch((err) => console.log(err))