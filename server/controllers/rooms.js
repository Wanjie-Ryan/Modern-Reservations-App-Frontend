const roommodel = require('../models/rooms')
const {StatusCodes} = require('http-status-codes')
const createError = require('../utils/error')
const hotelmodel = require('../models/hotels')




const createroom = async(req, res, next)=>{

    const hotelid = req.params.hotelid
    const newroom = new roommodel(req.body)

    try{

        const savedroom = await newroom.save()

        try{

            await hotelmodel.findByIdAndUpdate(hotelid, {$push: {rooms:savedroom._id}})

        }

        catch(err){

            next(err)
        }

        res.status(StatusCodes.OK).json(savedroom)

    }

    catch(err){

        next(err)
    }



}








module.exports = {createroom}
