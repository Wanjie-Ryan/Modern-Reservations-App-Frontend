const hoteluser = require('../models/users')


const register = async(req, res, next)=>{

    try{
        const user = await hoteluser.create({...req.body})


        res.status(201).json({msg: 'User has been created successfully'})
    }

    catch(err){

        next(err)
    }
}



module.exports = {register}