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
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  email: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  birthday: Sequelize.DATE,
  status: Sequelize.STRING
}

/**
 * Sequelize sync之后
 * (如果没有定义的话)
 * 会多出id,createDate,和modifyDate三个字段
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