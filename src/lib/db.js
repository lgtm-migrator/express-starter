const Sequelize = require('sequelize'),
    debug = require('debug')('express-demo:db'),
    models = require('../models'),
    connectionStr = process.env.CONNSTR || 'sqlite:sqlite.db',
    sequelize = new Sequelize(connectionStr, { logging: debug });

sequelize.authenticate()
    .then(() => {
        debug('Database connected');
        models.forEach(model => sequelize.define(model.name, model.model));
        return sequelize.sync({ force: true });
    })
    .then(() => {
        debug("Sync finished")
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = () => {
    return req => {
        req.db = sequelize;
        req.models = sequelize.models;
        req.next();
    }
}