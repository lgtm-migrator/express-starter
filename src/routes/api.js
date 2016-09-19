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



module.exports = router;