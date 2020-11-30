const mongoose = require('mongoose');
const User = require('../models/User');

const JournalSchema = mongoose.Schema({
    journal_entry: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default : Date.now
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }
});

module.exports = mongoose.model('Journal', JournalSchema);