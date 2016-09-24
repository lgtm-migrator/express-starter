'use strict'
const routes = require("../routes"),
  debug = require('./debug')('routes');

/**
 * 用于把
 * src/routes/ 
 * 路径下的所有文件挂载到app上 
 */

const mountServices = app => {
  routes.forEach(item => {
    debug(`mount route on ${item.path}`)
    app.use(item.path || '/', item.router)
  });
}


module.exports = mountServices;