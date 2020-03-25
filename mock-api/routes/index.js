const express = require('express');
const router = express.Router();
const methods = require('../constants/methods/methods');
const randomDelay = require('../utils/random-delay');
const www = require('../../www');
const path = require('path');

methods.forEach(method => router[method.method](method.route, async function (req, res, next) {
  randomDelay().then(() => {
    const dynamicData = require('../dynamicData');
    res.header('Access-Control-Allow-Origin', www.hostAdresses[0]);
    if (method.file){
      const filePath = path.join(__dirname, '../../public/images/', method.file);
      res.sendFile(filePath);
    } else {
      res.status(method.status).send(typeof method.send === 'function' ? method.send(req, dynamicData) : method.send);
    }
  });
}));

module.exports = router;
