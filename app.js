const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const utils = require('./mock-api/utils/utils');

const indexRouter = require('./mock-api/routes');
const usersRouter = require('./mock-api/routes/users');

const app = express();

function doDelay() {
    app.use((req, res, next) => {
        utils.randomDelay(next);
    });
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

doDelay();
app.use('/', indexRouter);
doDelay();
app.use('/', usersRouter);


module.exports = app;
