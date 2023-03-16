import React, {useContext, useState} from 'react'
import { Authcontext } from '../../context/authcontext'
import './login.css'


function Login() {


    const [credentials, setcredentials] = useState({

        username:undefined,
        password:undefined
    })


    const {loading, error, dispatch} = useContext(Authcontext)


    const handlechange = ()=>{


    }




  return (


    <>


        <div className="login">


            <div className="lcont">

                <input type="text" placeholder='username' onChange ={handlechange} id="username" className='input'/>

                <input type="password" placeholder='password' onChange ={handlechange} id="password" className='input'/>

                <button className="bnt">Login</button>

                {error && <span>{error.message}</span>}




            </div>









        </div>





    </>
    


  )
}

export default Login