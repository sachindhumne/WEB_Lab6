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
},{
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
OrderSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
OrderSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('order', OrderSchema);
