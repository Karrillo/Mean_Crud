const mongoose = require('mongoose');
const { Schema } = mongoose;

const schemaUsers = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        lowercase: true
    }
});

module.exports = mongoose.model('users', schemaUsers);