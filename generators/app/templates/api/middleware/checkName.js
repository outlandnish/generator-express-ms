'use strict';

var createError = require('http-errors');

module.exports = (req, res, next) => {
    if (!req.query.name) return next(createError(400, 'Name required'));
    next();
}