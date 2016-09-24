/**
 * 数据库配置
 */
'use strict'
const Sequelize = require('sequelize'),
  debug = require('./debug')('db'),
  models = require('../models'),
  connectionStr = process.env.CONNSTR || 'sqlite:sqlite.db',
  sequelize = new Sequelize(connectionStr, { logging: debug }),
  syncForce = process.env.NODE_ENV == 'development' ? true : false;

sequelize
  .authenticate()
  .then(() => {
    debug('Database connected');
    /**
     * 在这里定义
     * 数据实体
     */
    models.forEach(model => sequelize.define(model.name, model.model));
    return sequelize.sync({ force: syncForce });
  })
  .then(() => {
    /**
     * 执行到这里
     * 实体被同步到数据库
     */
    debug("Sync finished")
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app => {
  app.db = sequelize;
  return req => {
    req.db = sequelize;
    req.models = sequelize.models;
    req.next();
  }
}