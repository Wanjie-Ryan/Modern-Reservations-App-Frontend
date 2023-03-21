import React, {useEffect, createContext, useReducer} from 'react';


const initialstate = {


}


export const RegContext = createContext(initialstate)


const regReducer = (state, action)=>{

    switch(action.type){

        case 'regstart':

        return{

            user:null,
            loading:true,
            error:null
        }

        case 'regcomplete':

        return{

            user:action.payload,
            loading:false,
            error:null
        }

        case 'regfail':

        return{

            user:null,
            loading:false,
            error:action.payload
        }

        default:
            return state
        
            
    }


    
}


export const RegContextProvider = ({children})=>{

    const [state, dispatch ]= useReducer( regReducer, initialstate)


    useEffect(()=>{

        



    })


        
}