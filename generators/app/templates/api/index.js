'use strict';

let express = require('express');
let router = express.Router();

// controllers
let hello = rootRequire('api/controllers/hello');

// middleware
let checkName = rootRequire('api/middleware/checkName');

// define routes
router.get('/', checkName, hello);

module.exports = router;