var Sequelize = require('sequelize');
var debug = require('debug')('express-demo:db');

var sequelize = new Sequelize(process.env.CONNSTR || 'sqlite:sqlite.db', { logging: debug });

sequelize.authenticate()
    .then(() => {
        debug('Database connected');
        var User = sequelize.define('user', {
            username: Sequelize.STRING,
            birthday: Sequelize.DATE
        });
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