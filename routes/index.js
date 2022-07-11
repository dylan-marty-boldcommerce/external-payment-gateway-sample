module.exports = {
    indexRouter: require('./home'),

    authRouter: require('./auth'),
    captureRouter: require('./capture'),
    refundRouter: require('./refund'),
    retainRouter: require('./retain'),
    voidRouter: require('./void'),
};