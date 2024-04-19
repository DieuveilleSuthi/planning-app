const mongoose = require('mongoose');

const planningSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A planning model requires a title']
    },
    date: {
        type: Date,
        required: [true, 'A planning model requires a date']
    },
    time: {
        type: String,
        required: [true, 'A planning model requires a time']
    },
    description: {
        type: String,
    }
});

const Planning = mongoose.model('Planning', planningSchema);

module.exports = Planning;
