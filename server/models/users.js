const mongoose = require('mongoose');

const userschema = new mongoose.Schema({

    username:{
        type:String,
        required:[true, 'name of the user must be provided'],
        unique:true,
        minlength: 3,
        maxlength: 25
    },

    email:{
        type:String,
        required:[true, 'email must be provided'],
         match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email',
            
            ], 

        unique:true
    }, 

    password:{

        type:String,
        required:[true, 'password must be provided'],
        minlength:5
    },


    isAdmin:{

        type:Boolean,
        default:false
    }


}, {timestamps: true})


module.exports = mongoose.model('user', userschema);