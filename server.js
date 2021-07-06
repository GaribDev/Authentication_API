'use strict';

var express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,

    User = require('./api/models/user_model'),
    jsonwebtoken = require("jsonwebtoken");


const mongoose = require('mongoose');
const option = {
    socketTimeoutMS: 40000,
    keepAlive: true,
    reconnectTries: 40000
};


mongoose.connect('mongodb://localhost/user_auth', option).then(function () {
    //connected successfully
}, function (err) {
    //err handle
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'Auth_API', function (err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});
var routes = require('./api/routes/user_routes');
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log(' RESTful API server started on: ' + port);

module.exports = app;