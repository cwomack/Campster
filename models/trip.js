const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema ({
    name: {type: String, required: true},
    city: {type: String, default: 'Somewhere'},
    state: {type: String, default: 'Someplace'},
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema)