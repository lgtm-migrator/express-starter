const router = require('express').Router()


/**
 * @api {get} /api api welcome
 * @apiName welcome api
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
 * @api {post} /api/echo return request body 
 * @apiName echo
 * @apiGroup api
 * 
 * @apiParam value 任意字段任意值
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