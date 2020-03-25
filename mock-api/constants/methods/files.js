const routes = require('../routes');

const methods = [
    { method: 'post', status: 201, route: routes.files , send: ''},
    { method: 'delete', status: 204, route: routes.files, send: ''},
    { method: 'get', status: 200, route: routes.files, send: '', file: 'randomPicture.png' },
    //Error methods
    // { method: 'post', status: 404, route: routes.files, send: 'Not Found'},
    // { method: 'delete', status: 404, route: routes.filed, send: 'Not Found'},
    // { method: 'delete', status: 400, route: routes.filed, send: 'Bad Request'},
];

module.exports = methods;
