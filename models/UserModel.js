const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: false,
    },
    
}, { timestamps: true })
const UserModel = mongoose.model('Users', Users)

module.exports = UserModel