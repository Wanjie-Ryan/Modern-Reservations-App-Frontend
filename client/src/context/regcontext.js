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
    }




}