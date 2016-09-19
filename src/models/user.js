const Sequelize = require('Sequelize')

/**
 * @apiDefine UserModel
 * 
 * @apiParam username STRING
 * @apiParam password STRING
 * @apiParam birthday DATE
 * 
 **/
const user = {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    birthday: Sequelize.DATE
}

/**
 * Sequelize sync之后
 * 会多出id createDate 和modifyDate三个字段
 */


/**
 * 在这里定义name
 * 可以在req.models[name]访问
 * 例如这个model的访问方法就是req.models.user
 */
module.exports = {
    name: "user",
    model: user
}