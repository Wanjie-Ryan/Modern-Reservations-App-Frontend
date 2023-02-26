const hoteluser = require('../models/users')
const error = require('../utils/error')
const { StatusCodes } = require('http-status-codes');


const register = async(req, res, next)=>{

    try{
        const user = await hoteluser.create({...req.body})


        res.status(201).json({msg: 'User has been created successfully'})
    }

    catch(err){

        next(err)
    }
}


const login = async(req, res, next)=>{

    try{

        const {username, passowrd} = req.body

        if(!username || !passowrd){

            return next(error(StatusCodes.NOT_FOUND, 'The username or the Password cannot seem to be found!'))
        }

        const user = await hoteluser.findOne({username})





    }

    catch(err){


        next(err)
    }



}



module.exports = {register, login}