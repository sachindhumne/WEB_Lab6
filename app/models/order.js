'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OrderSchema = new Schema({
    name: {
        type: String,
        required: "Name is missing"
    },
    items: {
        type: Array,
        required: "Order items are missing"
    },
    tax: {
        type: Number
    },
    total: {
        type: Number
    },
    date: {
        type: Date
    }
});

//OrderSchema.get()

module.exports = mongoose.model('order', OrderSchema);
