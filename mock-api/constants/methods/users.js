const dataGenerator = require('../../utils/data-generator');
const routes = require('../routes');

const methods = [
  { method: 'get', status: 200, route: routes.users, send: (req) => {
    if (req && req.query && req.query.id) {
      return dataGenerator().users[Number.parseInt(req.query.id)];
    }
    return dataGenerator().users;
  }},
  { method: 'post', status: 201, route: routes.users, send: (req, dynamicData) => {
      dynamicData.users = dataGenerator().users;
      dynamicData.users.push(req.body);
      return '';
    }},
  { method: 'put', status: 204, route: routes.users, send: '' },
  { method: 'delete', status: 204, route: routes.users, send: '' },
  //Error methods
  // { method: 'get', status: 400, route: routes.users, send: 'Bad Request'},
  // { method: 'post', status: 409, route: routes.users, send: 'Invalid Fields'},
  // { method: 'post', status: 400, route: routes.users, send: 'Bad Request'},
  // { method: 'put', status: 404, route: routes.users, send: 'Not Found' },
  // { method: 'put', status: 400, route: routes.users, send: 'Bad Request'},
  // { method: 'delete', status: 404, route: routes.users, send: 'Not Found'},
];

module.exports = methods;
