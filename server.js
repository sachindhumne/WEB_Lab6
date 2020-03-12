let express = require('express'),
    app = express();
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


mongoose.connect( 'mongodb://localhost:27017/lab7', {});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const initApp = require('./app/app');
initApp(app);

app.listen(port);
console.log('Order RESTful API server started on: ' + port);
