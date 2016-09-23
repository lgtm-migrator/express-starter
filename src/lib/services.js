const services = require("../services"),
  debug = require('./debug')('services');

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