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

exports.get = (orderId) => {
    const promise = Order.findById(orderId).exec();
    return promise;
};

exports.update = (updateOrder) => {
    const promise = Order.findByIdAndUpdate(updateOrder.id, updateOrder).exec();
    return promise;
};

exports.delete = (orderId) => {
    const promise = Order.findByIdAndRemove(orderId).exec();
    return promise
};
