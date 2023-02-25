const express = require('express');
const router = express.Router();
const {createhotel, updatehotel, deletehotel, singlehotel, getallhotels} = require('../controllers/hotels')



router.route('/').post(createhotel).get(getallhotels)
router.route('/:id').put(updatehotel).delete(deletehotel).get(singlehotel)

module.exports = router;