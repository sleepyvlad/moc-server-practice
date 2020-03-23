const express = require('express');
const router = express.Router();
const methods = require('../constants/methods/methods');
const randomDelay = require('../utils/random-delay');

methods.forEach(method => router[method.method](method.route, async function (req, res, next) {
  randomDelay().then(() => {
    res.status(method.status).send(typeof method.send === 'function' ? method.send(req) : method.send);
  });
}));

module.exports = router;
