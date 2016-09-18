#!/usr/bin/env node

/**
 * !!!
 * DO NOT MODIFY THIS FILE
 * UNLESS YOU KNOW WAHT THIS FILE DO
 * !!!
 */


/**
 * 这里是程序的入口
 * express的配置在 src/app.js
 */


var run_env = process.env.NODE_ENV || "development"

/** 
 * 根据执行环境 判断入口位置
 */
var apppath = run_env == 'production' ? './bin/app' : './src/app'

if (run_env == "development") {
    // 使用babel-register
    require("babel-register");
}

/**
 * Module dependencies.
 */
var app = require(apppath);
var debug = require('debug')('express-demo:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */
var port = normalizePort(process.env.PORT || '3000');

app.set('port', port);

/**
 * Create HTTP server.
 */
var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.info(`Listening on ${bind} and run mode is ${run_env}`);
}