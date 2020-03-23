const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const randomDelay = require('./mock-api/utils/random-delay');

const indexRouter = require('./mock-api/routes');
const usersRouter = require('./mock-api/routes/users');

const app = express();

async function doDelay() {
    app.use((req, res, next) => {
        randomDelay().then(() => { next() });
    });
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(logger('dev'));
app.use(cookieParser());

doDelay().then(() => {
    app.use('/', indexRouter);
    app.use('/', usersRouter);
});

module.exports = app;
