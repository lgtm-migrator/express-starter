var express = require('express');
var router = express.Router();


/**
 * @apiDescription 获取一个用户
 * @api {get} /users Get User
 * @apiName Get User
 * @apiGroup Users
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
 * @apiGroup Users
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
    repo.create(req.body)
        .then(inserted => req.res.json(inserted))
        .catch(err => req.next(err));
});

module.exports = router;