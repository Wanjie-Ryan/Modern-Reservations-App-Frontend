const express = require('express')
const router = express.Router()
const {updateusers, deleteusers, singleusers, getallusers} = require('../controllers/users')
const {verifytoken, verifyuser} = require('../utils/verifytoken')



router.route('/checkauth').get(verifytoken, (req, res , next)=>{
    res.send('Hello, You are now logged in')
})


router.route('/checkuser/:id').get(verifyuser, (req, res , next)=>{

    res.send('You are now logged in and you can delete your account')
})




// router.get('/checkauth', verifytoken, (req, res, next)=>{
//     res.send('Hello, You are now logged in')
// })

router.route('/').get(getallusers)

router.route('/:id').get(singleusers).put(updateusers).delete(deleteusers)





module.exports = router