import React, {createContext, useContext, useEffect} from 'react';


const initialstate ={

    user:null,
    loading:false,

    //at the beginning the loading is false.

    error:null
}


export const Authcontext = createContext(initialstate)




