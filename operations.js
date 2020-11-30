const ops = require('../controller/detail');
const router = require('express').Router();


router.post('/view1', ops.view1);
router.post('/view2', ops.view2);
router.post('/view3', ops.view3);


module.exports = router
