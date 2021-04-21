const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timelineSchema = new Schema({
    timelinename: {
        type: String,
        required: true,
        trim: true
    },
    timelinedescription: {
        type: String,
        required: true
    },
    timelinedays: {
        type:  Date,
        required: true
    },
}, {
    timestamps: true,
});

const Timeline = mongoose.model('Timeline', timelineSchema);
module.exports = Timeline;