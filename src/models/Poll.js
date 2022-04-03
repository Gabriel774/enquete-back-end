const mongoose = require('mongoose')

const Poll = mongoose.model('Poll', {
    name: String,
    options: [{
        title: String,
        votes: Number
    }],
    start: String,
    end: String,
    color: {
        background: String,
        text: String
    }
})

module.exports = Poll