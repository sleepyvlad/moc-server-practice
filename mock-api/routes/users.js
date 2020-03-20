const express = require('express');
const router = express.Router();
const routes = require('../constants/routes');
const utils = require('../utils/utils');

/* GET users or user. */
router.get(routes.users, function(req, res, next) {
  if (req.headers.authorization && req.headers.authorization.indexOf('Bearer') !== -1) {
    if (req.query.id){
      const id = Number.parseInt(req.query.id);
      if (!Number.isNaN(id) && id !== 0 && id <= utils.dataGenerator().users.length) {
        res.status(200).send(utils.dataGenerator().users[id]);
      } else {
        res.status(400).send('Bad Request');
      }
    } else {
      res.status(200).send(utils.dataGenerator().users);
    }
  } else {
    res.status(401).send('Not Authorized');
  }
});

/* POST user.*/
router.post(routes.users, function (req, res, next) {
  const { body, headers } = req;
  const { name, email, password, avatar, role } = body;
  if (headers.authorization && req.headers.authorization.indexOf('Bearer') !== -1) {
    if (name && email && password && avatar && role) {
      if (name.length && email.length && password.length && avatar.length && role.length) {
        res.status(201).send();
      } else {
        res.status(409).send('Invalid fields');
      }
    } else {
      res.status(400).send('Bad request');
    }
  } else {
    res.status(409).send('Not Authorized');
  }
});

/* PUT user.*/
router.put(routes.users, function (req, res, next) {
  const { query: { id }, body, headers } = req;
  if (headers.authorization && headers.authorization.indexOf('Bearer') !== -1) {
    if (id && id <= utils.dataGenerator().users.length) {
      if (body && Object.keys(body).length
          && Object.keys(body).every(el => utils.dataGenerator().users[id].hasOwnProperty(el))) {
        res.status(204).send();
      } else {
        res.status(400).send('Bad Request');
      }
    } else {
      res.status(404).send('Not Found');
    }
  } else {
    res.status(401).send('Not Authorized');
  }
});

/* DELETE user.*/
router.delete(routes.users, function (req, res, next) {
  const { query: { id }, headers } = req;
  if (headers.authorization && headers.authorization.indexOf('Bearer') !== -1) {
    if (id && id <= utils.dataGenerator().users.length && utils.dataGenerator().users[id]) {
      res.status(204).send();
    } else {
      res.status(404).send('Not Found');
    }
  } else {
    res.status(401).send('Not Authorized');
  }
});
module.exports = router;
