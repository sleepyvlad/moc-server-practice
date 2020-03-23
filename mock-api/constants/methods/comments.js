const routes = require('../routes');

const methods = [
    { method: 'post', status: 201, route: routes.comments , send: ''},
    //Error methods
    // { method: 'post', status: 400, route: routes.comments, send: 'Bad Request'},
    // { method: 'post', status: 404, route: routes.comments, send: 'Not Found'},
];

module.exports = methods;
