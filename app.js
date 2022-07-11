const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const {
    indexRouter,
    authRouter,
    captureRouter,
    refundRouter,
    retainRouter,
    voidRouter,
} = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/capture', captureRouter);
app.use('/refund', refundRouter);
app.use('/retain', retainRouter);
app.use('/void', voidRouter);

module.exports = app;
