'use strict';

const  orderController = require('../controller/order-controller');

module.exports = (app) => {
    app.route('/orders')
        .get(orderController.list)
        .post(orderController.save);

    app.route('/orders/:id')
        .get(orderController.get)
        .put(orderController.update)
        .delete(orderController.delete);
};
