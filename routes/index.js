var express = require('express');
var router = express.Router();

const { getProductDateList } = require('../controller/productDate');

//get all date
router.get('/:start_date/:end_date/:status', getProductDateList);

module.exports = router;
