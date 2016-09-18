import Router from 'express'

const router = Router()

/**
 * welcome api
 */
router.get('/', function(req, res, next) {
    res.json({
        type: "spi",
        message: "welcome to api"
    });
});

/**
 * echo api
 */
router.post('/echo', req => {
    req.res.json(req.body);
});

/**
 * echo page
 */
router.get('/echo', req => req.res.render('echo', { title: "echo" }));



module.exports = router;