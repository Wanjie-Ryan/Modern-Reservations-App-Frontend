import React, {createContext, useReducer} from 'react';


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
            return action.payload

        //whenever our search bar changes we will send this data, the payload will contain the data

        case 'resetsearch':
            return initialstate

            default:
                return state;
    }
 }


 export const SearchcontextProvider = ({children}) =>{

    const [state, dispatch] = useReducer(searchreducer, initialstate)

    return(
        <Searchcontext.Provider value = {{city:state.city, dates:state.dates, options:state.options, dispatch}}>
            {children}
        </Searchcontext.Provider>
    )
 }