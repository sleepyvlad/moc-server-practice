const routes = require('../routes');
const dataGenerator = require('../../utils/data-generator');

const methods = [
    { method: 'post', status: 201, route: routes.login , send: {
        accessToken: dataGenerator().accessToken,
        refreshToken: dataGenerator().refreshToken,
        }, },
    { method: 'post', status: 204, route: routes.logout , send: ''},
    { method: 'post', status: 200, route: routes.refreshToken ,  send: {
            accessToken: dataGenerator().accessToken,
            refreshToken: dataGenerator().refreshToken,
        }, },
    //Error methods
    { method: 'post', status: 400, route: routes.login , send: 'Bad Request'},
];

module.exports = methods;
