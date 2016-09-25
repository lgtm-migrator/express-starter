const rd = require('require.d'),
  services = rd(__dirname + "/../services"),
  debug = require('./debug')('services'),
  _ = require('lodash');


/**
 * 将src/services路径下
 * 所有的service的实例挂载到app对象上
 */
const mountServices = app => {
  app.services = app.services || {}
  _.forEach(
    services,
    (service, name) => {
      const sName = service.serviceName || name;
      const sService = service.service || service;
      if (name == 'base') return;
      debug(`Mount service ${sName}`)
      app.services[sName] = new sService(app);
    })
  return req => {
    req.services = app.services;
    req.next();
  }
}


module.exports = mountServices;