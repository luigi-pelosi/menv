const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    token: {
        type: String
    }
})

User.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id

    return object
})

module.exports = mongoose.model('user', User)