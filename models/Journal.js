const mongoose = require('mongoose');

const JournalSchema = mongoose.Schema({
    journal_entry: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Journal', JournalSchema);