var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main')
const ctrlFood = require('../controllers/foods')

/* GET home page. */
router.get('/', ctrlMain.index);

// GET Food page
router.get('/list', ctrlFood.foodlist);
router.get('/favourite', ctrlFood.myfavouriteFood);

module.exports = router;
