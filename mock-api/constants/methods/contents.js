const routes = require('../routes');
const dataGenereator = require('../../utils/data-generator');

const methods = [
    { method: 'get', status: 200, route: routes.contents, send: dataGenereator().contents },
    { method: 'post', status: 201, route: routes.contents , send: ''},
    { method: 'delete', status: 204, route: routes.contents, send: ''},
    //Error methods
    // { method: 'get', status: 400, route: routes.contents, send: 'Bad Request'},
    // { method: 'post', status: 400, route: routes.contents, send: 'Bad Request'},
    // { method: 'post', status: 404, route: routes.contents, send: 'Not Found'},
    // { method: 'delete', status: 404, route: routes.contents, send: 'Not Found'},
    // { method: 'delete', status: 400, route: routes.contents, send: 'Bad Request'},
];

module.exports = methods;
