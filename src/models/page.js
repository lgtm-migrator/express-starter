const Sequelize = require('Sequelize')

const page = {
    title: Sequelize.STRING,
    content: Sequelize.STRING
}

module.exports = {
    name: "page",
    model: page
}