'use strict'
const express = require('express');
const router = express.Router();


/**
 * @apiDescription 获取一个用户
 * @api {get} /users Get User
 * @apiName Get User
 * @apiGroup users
 * 
 * @apiParam id Integer 
 * @apiSuccessExample {json} Success Response
 * {
    "birthday": null,
    "createdAt": "2016-09-19T06:24:28.674Z",
    "id": 1,
    "password": "11111",
    "updatedAt": "2016-09-19T06:24:28.674Z",
    "username": "ssss"
}
 **/
router.get('/', function(req, res, next) {
  const id = req.param('id'),
    repo = req.models.user;
  repo.findOne({ where: { id: id } })
    .then(u => req.res.json(u))
    .catch(err => req.next(err));
});


/**
 * 增加一个用户
 * 
 * @api {post} /users Add User
 * @apiName Add User
 * @apiGroup users
 * 
 * @apiUse UserModel
 * 
 * @apiSuccessExample {json} Success Response
 *     {
    "createdAt": "2016-09-19T03:07:05.818Z",
    "id": 2,
    "password": "1132",
    "updatedAt": "2016-09-19T03:07:05.818Z",
    "username": "suntao"
}
 **/
router.post('/', req => {
  const repo = req.models.user;
  const mailer = req.services.mailer;
  const util = req.services.util;
  const serverurl = util.serverUrl(req);
  let newUser = Object.assign({ status: "not check mail" }, req.body);
  repo.create(newUser)
    .then(inserted => {
      mailer.sendMail(newUser.email, '激活', `<a href="${serverurl}/users/activate?id=${inserted.id}">点此激活</a>`)
      req.res.json(inserted)
    })
    .catch(err => req.next(err));
});


/**
 * @apiDescription 账户激活
 * @api {get} /users/activate activate user
 * @apiName activate user
 * @apiGroup users
 * 
 * @apiParam id 用户的id
 * @apiSuccessExample Success Response
 * activate success
 **/
router.get('/activate', req => {
  const repo = req.models.user;
  const id = req.query.id;
  repo.findById(id)
    .then(u => {
      u.status = "email checked";
      return u.save()
    })
    .then(() => {
      req.res.end("activate success");
    })
    .catch(err => {
      req.res.end("activate error");
    })
});

module.exports = {
  router: router,
  path: "/users"
};