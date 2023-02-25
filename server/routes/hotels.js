const express = require('express');
const router = express.Router();
const {createhotel, updatehotel, deletehotel} = require('../controllers/hotels')



router.route('/').post(createhotel)
router.route('/:id').put(updatehotel).delete(deletehotel)

module.exports = router;