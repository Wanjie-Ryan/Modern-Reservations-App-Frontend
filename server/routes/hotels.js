const express = require('express');
const router = express.Router();
const {createhotel} = require('../controllers/hotels')



router.route('/').post(createhotel)

module.exports = router;