const mongoose = require('mongoose')

const NotificationsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    message: String,
    timestamp: String,

}, { timestamps: true })

const Notification = mongoose.model('Notification', NotificationsSchema)

module.exports = Notification
