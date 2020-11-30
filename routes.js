const router = require("express").Router()
var ops = require('./operations');

router.use('/operations', ops);

module.exports = router;
