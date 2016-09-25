'use strict'
const nodemailer = require('nodemailer'),
  Base = require('./base'),
  debug = require('../lib/debug')('mail service'),
  mailerOpt = require('../configs/mail');

/**
 * 发送邮件Service
 */
class Mailer extends Base {

  constructor(app) {
    super(app);
    this.mailer = nodemailer.createTransport(mailerOpt);
  }

  sendMail(receivers, subject, content) {
    const mail = {
      from: `"No Reply" <${mailerOpt.auth.user}>`,
      to: receivers,
      subject: subject,
      text: '',
      html: content
    }
    this.mailer.sendMail(mail, (err, info) => {
      if (err) {
        console.error("send mail error");
        debug(err.stack);
      } else
        debug(`Message sent: ${info.response}`);
    })
    return;
  }

}

module.exports = Mailer;