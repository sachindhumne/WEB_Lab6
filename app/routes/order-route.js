'use strict';

const  orderController = require('../controller/order-controller');

module.exports = (app) => {
    app.route('/orders')
        .get(orderController.list)
        .post(orderController.save);
};
