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

        


    }






module.exports = {createhotel, updatehotel, deletehotel}