var express = require('express');
var router = express.Router();



/**
 * @apiDescription 首页
 * @api {get} / Home
 * @apiName Home
 * @apiGroup Home
 * 
 * @apiSuccessExample {html} Success Response
 * <!DOCTYPE html>
<body>
    <h1>Express</h1>
<p>Welcome to Express</p>
</body>
 **/
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/app', req => {
  req.res.json(req.services.util.sayHello());
});

module.exports = {
  router: router,
  path: '/'
};