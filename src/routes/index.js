var express = require('express');
var router = express.Router();



/**
 * @apiDescription 首页
 * @api {get} / Home
 * @apiName Home
 * @apiGroup Home
 * 
 * @apiSuccessExample Success Response
 * input success example
 **/
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;