const express = require('express');
const router = express.Router();
const {createhotel, updatehotel, deletehotel, singlehotel, getallhotels} = require('../controllers/hotels')
const {verifytoken, userverify, verifyadmin} = require('../utils/verifytoken')



router.route('/').post(verifyadmin ,createhotel).get(getallhotels)


router.route('/:id').put(verifyadmin, updatehotel).delete(verifyadmin, deletehotel).get(singlehotel)

module.exports = router;