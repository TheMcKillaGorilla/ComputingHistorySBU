const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pioneerSchema = new Schema({
    pioneername: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

const Pioneer = mongoose.model('Pioneer', pioneerSchema);
module.exports = Pioneer;