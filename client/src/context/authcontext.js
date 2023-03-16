import React, {createContext, useContext, useEffect,useReducer} from 'react';


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


    export const AuthcontextProvider = ({children})=>{

        const [state, dispatch] =useReducer(Authreducer, initialstate)


        // when user logs in, I want to store his details in local storage, so that even if he or she refreshes the page, he is not logged out that is why I use the useEffect hook.


        useEffect(()=>{

            localStorage.setItem('user', JSON.stringify())


        }, [state.user])


        //stringify changes the object property to a string in order for it to be saved in local storage

        // whenever it changes we are going to update the local storage



        return(


            <AuthcontextProvider value={{user:state.user, loading:state.loading, error:state.error, dispatch}}>


                {children}

            </AuthcontextProvider>
        )




    }






