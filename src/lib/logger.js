/**
 * 日志配置
 */
'use strict'
const log4js = require('log4js'),
  sign = process.env.PROJNAME || 'express-demo';

log4js.configure(`${__dirname}/../configs/log.json`, { cwd: `${__dirname}/../../` });

const logger = log4js.getLogger(sign);

logger.info('logger inited')

module.exports = () => logger