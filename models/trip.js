const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema ({
    name: {type: String, required: true},
    city: {type: String, default: 'Somewhere'},
    state: {type: String, default: 'Someplace'},
    Date: {type: Date, default: 'Soon'},
    lists: {type: Array, required: true}
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema)