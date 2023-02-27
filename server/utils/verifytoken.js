const jwt = require('jsonwebtoken')
const createError = require('./error')
const {StatusCodes} = require('http-status-codes')

const verifytoken = (req, res, next)=>{

    const token = req.cookies.access_token

    if(!token){

        return next(createError(StatusCodes.UNAUTHORIZED, 'You are not authenticated!'))

    }

    jwt.verify(token, process.env.jwt_secret, (err, user)=>{

        if(err){
            return next(createError(StatusCodes.FORBIDDEN, 'The Token is Invalid!'))
        }

        req.user = user

        next()
    })
}