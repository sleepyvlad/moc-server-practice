const randomDelay = require('../utils/random-delay');
const www = require('../../www');
const path = require('path');
const cors = require('cors');

module.exports = (router) => {
  require('../constants/methods/methods').forEach(method => {
      router[method.method](method.route, cors(www.hostAddress), async function (req, res, next) {
        randomDelay().then(() => {
          const dynamicData = require('../dynamicData');
          if (method.file){
            const filePath = path.join(__dirname, '../../public/images/', method.file);
            res.sendFile(filePath);
          } else {
            res.status(method.status).send(typeof method.send === 'function' ? method.send(req, dynamicData) : method.send);
          }
        });
      })
  });
  return router;
};
