/**
 * 数据库配置
 */
'use strict'
const rd = require('require.d'),
  Sequelize = require('sequelize'),
  debug = require('./debug')('db'),
  models = rd(__dirname + '/../models'),
  connectionStr = process.env.CONNSTR || 'sqlite:sqlite.db',
  sequelize = new Sequelize(connectionStr, { logging: debug }),
  syncForce = process.env.NODE_ENV == 'development' ? true : false,
  _ = require('lodash');

sequelize
  .authenticate()
  .then(() => {
    debug('Database connected');
    /**
     * 在这里定义
     * 数据实体
     */
    _.map(models, (model, name) => {
      const mName = model.name || name;
      const mModel = model.model || model;
      sequelize.define(mName, mModel);
      debug(`Define model ${mName} as ${_.keys(mModel)}`)

    });
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
    console.error('Error happened when db init', err);
    process.exit(1);
  });

module.exports = app => {
  app.db = sequelize;
  return req => {
    req.db = sequelize;
    req.models = sequelize.models;
    req.next();
  }
}