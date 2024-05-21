const mongoose = require('mongoose');
const { Schema } = mongoose;

const readBookSchema = new Schema({
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    issue_date: {
        type: Date,
        required: true
    },
    return_date: {
        type: Date,
        required: true
    }
});

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        required: true
    },
    readBooks: [readBookSchema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
