const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3001
const connectionDB = require('./DB/connection')








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




