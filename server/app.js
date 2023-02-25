const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3001
const connectionDB = require('./DB/connection')
const authroute = require('./routes/auth')
const hotelsroute = require('./routes/hotels')
const roomsroute = require('./routes/rooms')
const usersroute = require('./routes/users')




//MIDDLEWARES
app.use('/api/auth', authroute)
app.use('/api/hotels', hotelsroute)
app.use('/api/rooms', roomsroute)
app.use('api/users', usersroute)

const DB = async()=>{

    try{

        await connectionDB(process.env.mongo_url)

        app.listen({port}, ()=>{
            console.log(`Server is running on port ${port}`)
        })
    }

    catch(error){


        console.log(error)
    }
}

DB()




