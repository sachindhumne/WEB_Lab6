'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('order');

exports.search = (params) => {
    const promise = Order.find(params).exec();
    return promise;
};

exports.save = (order) => {
    const newOrder = new Order(order);
    return newOrder.save();
};


