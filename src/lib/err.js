'use strict'
const debug = require('./debug')('request error')

module.exports = () => {
  return function(err, req, res, next) {
    res.status(err.status || 500);
    debug(`${err.status}: ${err.message}`)
    res.end();
  }
}