'use strict';

module.exports = (req, res, next) => {
    res.send(`Hello ${req.query.name}`);
}