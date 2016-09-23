'use strict'

const router = require('express').Router()


/**
 * @api {get} /api Welcome
 * @apiName welcome 
 * @apiGroup api
 * 
 * @apiSuccessExample Success Response
 * {
    "message": "welcome to api",
    "type": "spi"
}
 **/
router.get('/', function(req, res, next) {
  res.json({
    type: "spi",
    message: "welcome to api"
  });
});

/**
 * @apiDescribe 返回客户端发送的实体
 * 
 * @api {post} /api/echo Echo
 * @apiName Echo
 * @apiGroup api
 * 
 * @apiParam value 任意字段任意值
 * 
 * @apiSuccessExample json Success Response
 * {
    "param1": "value1",
    "param2": "value2"
}
 * 
 **/
router.post('/echo', req => {
  req.res.json(req.body);
});

/**
 * @api {get} /api/echo echo page
 * @apiName echo page
 * @apiGroup api
 * 
 **/
router.get('/echo', req => req.res.render('echo', { title: "echo" }));



/**
 * @apiDescription 
 * 发送测试邮件
 * 可以使用所有方法
 * 可以使用Query String/Body传递参数
 * 
 * @api {all} /api/sendMailTo sendMail
 * @apiName sendMail
 * @apiGroup api
 * 
 * @apiParam address 接收地址
 **/
router.all('/sendMailTo', req => {
  const address = req.param('address');
  const mailer = req.services.mailer;
  mailer.sendMail(address, 'hello world', '<a href="http://git.suntao.science">点此打开我的git</a>')
  req.res.end(`Success，请检查你的邮箱 ${address}，多半在垃圾邮件文件夹里`);
})


/**
 * @apiDescription 服务器地址
 * @api {get} /api/address server host url
 * @apiName server host url
 * @apiGroup api
 * 
 * @apiSuccessExample Success Response
 * http://localhost:3000
 **/
router.get('/address', req => {
  req.res.end(req.services.util.serviceUrl(req));
})


module.exports = router;