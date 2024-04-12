const mongoose = require('mongoose');

const planningSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required:[true, 'A planning model require a title']
        },
        date:{
            type: Date,
            required:[true, 'A planning model require a date']
        }, 
        time:{
            type: String,
            required:[true, 'A planning model require a time']
        },
        description:{
            type: String,
            required:[true, 'A planning model require a description']
        }
    }
)

const Planning = mongoose.model('Planning', planningSchema)

module.exports = Planning;