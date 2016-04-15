'use strict';

global.rootRequire = (name) => {
    return require(__dirname + '/' + name);
}

require('dotenv').config();

let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');
let api = rootRequire('api');

let app = express();

// setup global middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV == 'production')
    app.use(morgan('combined'));
else
    app.use(morgan('dev'));

// setup router
app.use('/', api);

// environment settings
let port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

module.exports = app;