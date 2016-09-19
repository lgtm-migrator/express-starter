module.exports = str => {
    return require('debug')((process.env.PROJNAME || 'express-demo') + ":" + str)
}