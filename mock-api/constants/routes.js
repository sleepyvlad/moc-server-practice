const apiRoute = '/api';
const routes = {
    users: apiRoute + '/users',
    tasks: apiRoute + '/tasks',
    notifications: apiRoute + '/notifications',
    files: apiRoute + '/files',
    contents: apiRoute + '/contents',
    comments: apiRoute + '/comments',
    login: apiRoute + '/auth/login',
    logout: apiRoute + '/auth/logout',
    refreshToken: apiRoute + '/auth/refresh-token',

};

module.exports = routes;
