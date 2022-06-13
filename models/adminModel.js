const mongoose = require('mongoose');

// Admin model schema
const adminModel = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        required : [true, 'Email field is required'],
        unique: true,
        uppercase: [false, 'Uppercase not allow']
    },
    uName: {
        type: String,
        required : [true, 'Username field is required'],
        unique: true,
        minLength : 6,
        maxLength : 10
    },
    cell: {
        type: String,
        unique: true,
        required : [true, 'Mobile number field is required'],
    },
    location: {
        type: String,
        default: 'Dhaka'
    },
    password: String
},{timestamps: true})


// Export our model
module.exports = mongoose.model('Admin', adminModel)