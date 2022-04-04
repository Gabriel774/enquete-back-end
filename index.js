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

mongoose.connect('mongodb://localhost:27017/data').then(() => {
    app.listen(3333)
    console.log('aplicação conectada ao banco de dados')
}).catch((err) => console.log(err))