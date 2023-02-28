const express = require('express');
const router = express.Router();
const {createhotel, updatehotel, deletehotel, singlehotel, getallhotels, countbycity} = require('../controllers/hotels')
const {verifytoken, userverify, verifyadmin} = require('../utils/verifytoken')



router.route('/').post(verifyadmin ,createhotel).get(getallhotels)


router.route('/find/:id').put(verifyadmin, updatehotel).delete(verifyadmin, deletehotel).get(singlehotel)


// router.get('/').get(gethotels)
router.get('/countbycity').get(countbycity)
// router.get('/countByType').get(gethotels)





module.exports = router;