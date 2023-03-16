import React, {createContext, useContext, useEffect} from 'react';


const initialstate ={

    user:null,
    loading:false,

    //at the beginning the loading is false.

    error:null
}


export const Authcontext = createContext(initialstate)

//creating our auth context.


const Authreducer =(state, action)=>{

    switch(action.type){

        case'loginStart':
            
            return{
                user:null,
                loading:true,
                error:null
            }

        
        case 'loginsuccess':

            return{

               user:action.payload,
               loading:false,
               error:null 
            }

        
        case'loginfailure':

            return{

                user:null,
                loading:false,
                error:action.payload


            }

        case 'logout':

            return{

                user:null,
                loading:null,
                error:null
            }

        default:

             return state
        }
    }






