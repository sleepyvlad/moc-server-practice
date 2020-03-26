const usersMethods = require('./users');
const tasksMethods = require('./tasks');
const notificationsMethods = require('./notifications');
const contentsMethods = require('./contents');
const commentsMethods = require('./comments');
const authorizationMethods = require('./authorization');
const filesMethods = require('./files');
const noAuthorizationMethods = require('./noAuthMethods');

module.exports = [
    ...usersMethods,
    ...tasksMethods,
    ...notificationsMethods,
    ...contentsMethods,
    ...commentsMethods,
    ...authorizationMethods,
    ...filesMethods,

    // методы с ошибкой авторизации
    // ...noAuthorizationMethods,
];
