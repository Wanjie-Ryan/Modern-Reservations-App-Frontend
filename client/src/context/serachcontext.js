import React, {createContext} from 'react';


const initialstate ={

    city:undefined,
    dates:[],
    options:{

        adult:undefined,
        children:undefined,
        room:undefined
    }

}

    

export const Searchcontext = React.createContext(initialstate)
// creating the context

 const searchreducer =(state,action)=>{

    switch(action.type){
        case 'newsearch': 
    }
 }