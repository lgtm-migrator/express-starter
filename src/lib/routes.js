'use strict'
const rd = require('require.d'),
  routes = rd(`${__dirname}/../routes`),
  debug = require('./debug')('routes'),
  forEach = require('lodash').forEach;


/**
 * 用于把
 * src/routes/ 
 * 路径下的所有文件挂载到app上 
 */

const mountServices = app => {
  forEach(routes, (route, name) => {
    const mountPath = route.path || `/${name}`
    const router = typeof route == "function" ? route : route.router;
    debug(`Mount route ${name} on ${mountPath}`)
    app.use(mountPath, router)
  })
}


module.exports = mountServices;