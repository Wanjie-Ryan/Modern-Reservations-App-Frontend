const express = require('express')
const router = express.Router()
const {updateusers, deleteusers, singleusers, getallusers} = require('../controllers/users')



router.route('/').get(getallusers)

router.route('/:id').get(singleusers).put(updateusers).delete(deleteusers)





module.exports = router