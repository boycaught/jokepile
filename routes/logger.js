/* -----------------------------------------------------------------------

 Logging Operations (Winston)

 ------------------------------------------------------------------------ */

var winston = require('winston');

var infologger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ level: 'verbose' }),
        new (winston.transports.File)({ filename: 'jokepile.log', level: 'info' })
    ]
});

var errorlogger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ level: 'error' }),
        new (winston.transports.File)({ filename: 'jokepile-error.log', level: 'error' })
    ]
});

var warninglogger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({ filename: 'jokepile-warning.log', level: 'warning' })
    ]
});

var verboselogger = new (winston.Logger)({
    transports: [
        new (winston.transports.File)({ filename: 'jokepile-verbose.log', level: 'verbose' })
    ]
});


//* exports */
exports.logInfo = function(info) {

    infologger.log('info', info);

};

exports.logError = function(error) {

    errorlogger.log('error', error);

};

exports.logWarning = function(warning) {

    warninglogger.log('warning', warning);

};

exports.logVerbose = function(verbose) {

    verboselogger.log('warning', verbose);

};

