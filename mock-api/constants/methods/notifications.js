const dataGenerator = require('../../utils/data-generator');
const routes = require('../routes');

const methods = [
    { method: 'get', status: 200, route: routes.notifications , send: (req) => {
            if (req && req.query) {
                return dataGenerator().notifications[Number.parseInt(req.query.id)];
            }
            return dataGenerator().notifications;
        }},
    //Error methods
    // { method: 'get', status: 400, route: routes.notifications, send: 'Bad Request'},
];

module.exports = methods;
