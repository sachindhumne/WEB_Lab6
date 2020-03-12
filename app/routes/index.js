'use strict';

const orderRoute = require('./order-route');

module.exports = (app) => {
    orderRoute(app);
};
