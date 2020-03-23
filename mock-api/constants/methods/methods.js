const usersMethods = require('./users');
const tasksMethods = require('./tasks');
const notificationsMethods = require('./notifications');
const contentsMethods = require('./contents');
const commentsMethods = require('./comments');
const authorizationMethods = require('./authorization');
const noAuthorizationMethods = require('./noAuthMethods');

module.exports = [
    ...usersMethods,
    ...tasksMethods,
    ...notificationsMethods,
    ...contentsMethods,
    ...commentsMethods,
    ...authorizationMethods,

    // методы с ошибкой авторизации
    // ...noAuthorizationMethods,
];
