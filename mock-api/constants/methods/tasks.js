const dataGenerator = require('../../utils/data-generator');
const routes = require('../routes');

const methods = [
    { method: 'get', status: 200, route: routes.tasks, send: (req) => {
            if (req && req.query && req.query.id) {
                return dataGenerator().tasks[Number.parseInt(req.query.id)];
            }
            return dataGenerator().tasks;
        }},
    { method: 'post', status: 201, route: routes.tasks, send: ''},
    { method: 'put', status: 204, route: routes.tasks, send: '' },
    { method: 'delete', status: 204, route: routes.tasks, send: '' },
    //Error methods
    // { method: 'get', status: 400, route: routes.tasks, send: 'Bad Request'},
    // { method: 'post', status: 409, route: routes.tasks, send: 'Invalid Fields'},
    // { method: 'post', status: 400, route: routes.tasks, send: 'Bad Request'},
    // { method: 'put', status: 404, route: routes.tasks, send: 'Not Found' },
    // { method: 'put', status: 400, route: routes.tasks, send: 'Bad Request'},
    // { method: 'delete', status: 404, route: routes.tasks, send: 'Not Found'},
];


module.exports = methods;
