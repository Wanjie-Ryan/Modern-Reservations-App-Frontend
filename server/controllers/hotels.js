const hotelmodel = require('../models/hotels')
const {StatusCodes} = require('http-status-codes')


// CREATING A HOTEL

const createhotel = async(req, res)=>{

    try{

        const hotel = await hotelmodel.create({...req.body})

        res.status(StatusCodes.CREATED).json({hotel})

    }

    catch(error){

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
    }

}


    //UPDATE A HOUSE    


    const updatehotel = async(req, res)=>{

        try{

            const hotel = await hotelmodel.findByIdAndUpdate()

        }


        catch(error){

            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
        }


    }






module.exports = {createhotel, updatehotel}