'use strict';

module.exports = (app) => {
    const models = require('./models/index');
    const routes = require('./routes/index');//route dependencies must be added at last
    routes(app);
};
