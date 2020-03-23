const express = require('express');
const router = express.Router();
const routes = require('../constants/routes');
const dataGenerator = require('../utils/data-generator');

function checkAuth(req, res) {
  if (req.headers.authorization && req.headers.authorization.indexOf('Bearer') !== -1) {
    return true;
  }
  res.status(401).send('Not Authorized');
  return false;
}

const methods = [
  { method: 'get', status: 200, send: (req) => {
    if (req && req.query) {
      return dataGenerator().users[Number.parseInt(req.query.id)];
    }
    return dataGenerator().users;
  }},
  { method: 'post', status: 201, send: ''},
  { method: 'put', status: 204, send: '' },
  { method: 'delete', status: 204, send: '' },
  //Error methods
  // { method: 'get', status: 400, send: 'Bad Request'},
  // { method: 'post', status: 409, send: 'Invalid Fields'},
  // { method: 'post', status: 400, send: 'Bad Request'},
  // { method: 'put', status: 404, send: 'Not Found' },
  // { method: 'put', status: 400, send: 'Bad Request'},
  // { method: 'delete', status: 404, send: 'Not Found'},
];

methods.forEach(method => router[method.method](routes.users, function (req, res, next) {
  if (checkAuth(req, res)) {
    res.status(method.status).send(typeof method.send === 'function' ? method.send(req) : method.send);
  }
}));

module.exports = router;
