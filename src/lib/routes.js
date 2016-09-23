'use strict'
const routes = require("../routes"),
  debug = require('./debug')('routes');


const mountServices = app => {
  routes.forEach(item => {
    debug(`mount route on ${item.path}`)
    app.use(item.path || '/', item.router)
  });
}


module.exports = mountServices;