var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
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