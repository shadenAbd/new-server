const mongoose = require('mongoose')

const category = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },

}, { timestamps: true })
const categoryModel = mongoose.model('category', category)

module.exports = categoryModel