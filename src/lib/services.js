const services = require("../services"),
  debug = require('./debug')('services');

/**
 * 将src/services路径下
 * 所有的service的实例挂载到app对象上
 */

const mountServices = app => {
  app.services = app.services || {}
  services.forEach(item => {
    debug(`mount service ${item.name}`)
    app.services[item.name] = new item.service(app);
  });
  return req => {
    req.services = app.services;
    req.next();
  }
}


module.exports = mountServices;