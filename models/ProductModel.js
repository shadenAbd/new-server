const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    price: Number,
    images: [String],
    category: { type: String, },
    flashSale : Boolean,
    salePercentage : {
        type:Number,
        default : 0,
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

module.exports = Product
