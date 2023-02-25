const hotelmodel = require('../models/hotels')
const {StatusCodes} = require('http-status-codes')
const createError = require('../utils/error')


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

            const {id:hotelID} = req.params

            const hotel = await hotelmodel.findByIdAndUpdate({_id:hotelID}, req.body, {
                new:true,
                runValidators:true
            })

            if(!hotel){

                res.status(StatusCodes.NOT_FOUND).json({msg: `Hotel with the Id ${hotelID} cannot be not found`})
            }

            res.status(StatusCodes.OK).json({hotel})

        }


        catch(error){

            res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error)
        }


    }


    //DELETE A HOUSE

    const deletehotel = async(req, res)=>{

        try{

        
            const {id:hotelID} = req.params

            const hotel = await hotelmodel.findByIdAndDelete({_id:hotelID} )

            if(!hotel){

                res.status(StatusCodes.NOT_FOUND).json({msg: `Hotel with the Id ${hotelID} cannot be not found`})
            }

            res.status(StatusCodes.OK).json({msg:'hotel has been deleted.'})

        }

        catch(error){

            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})
        }

    }


    //getting single hotel

    const singlehotel = async(req, res)=>{

        try{

            const {id:hotelID} = req.params
            
            const hotel = await hotelmodel.findById({_id:hotelID})

            if(!hotel){

                res.status(StatusCodes.NOT_FOUND).json({msg:`Hotel with id ${hotelID} cannot be not found`})
            }

            res.status(StatusCodes.OK).json({hotel})

        }

        catch(error){

            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})

        }
    }


    //getting all hotels


    const getallhotels = async(req, res, next)=>{

       
        try{


            const hotel = await hotelmodel.find()

            res.status(StatusCodes.OK).json({hotel})
        }

        catch(err){

            // res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error})

            next(err)
        }


    }





module.exports = {createhotel, updatehotel, deletehotel, singlehotel, getallhotels}