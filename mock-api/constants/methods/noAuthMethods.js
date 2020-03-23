const methods = [
    { method: 'get', status: 401, route: '/', send: 'Not Authorized'},
    { method: 'post', status: 401, route: '/', send: 'Not Authorized'},
    { method: 'put', status: 401, route: '/', send: 'Not Authorized'},
    { method: 'delete', status: 401, route: '/', send: 'Not Authorized'},
];

module.exports = methods;
