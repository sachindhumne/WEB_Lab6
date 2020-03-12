'use strict';

const orderService = require('../services/order-service')

exports.list = (request, response) => {
    const totalQuery = request.query.total;
    const params = {};
    if(totalQuery) {
        params.total = totalQuery
    };
    const promise = orderService.search(params);
    const result = (orders) => {
        response.status = 200;
        response.json = orders;
    };
    promise
        .then(result)
        .catch(renderErrorResponse(response));

};


exports.save = (request, response)=> {
    const order = Object.assign({}, request.body);
    const result = (saveOrder) => {
        response.status = 200;
        response.json(saveOrder);
    };
    const promise = orderService.save(order);
    promise.then(result);
};


/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        response.status(500);
        response.json({
            message: error.message
        });
    };
    return errorCallback;
};
