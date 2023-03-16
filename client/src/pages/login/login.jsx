import React, {useContext, useState} from 'react'
import { Authcontext } from '../../context/authcontext'
import './login.css'


function Login() {


    const [credentials, setcredentials] = useState({

        username:undefined,
        password:undefined
    })


    const {loading, error, dispatch} = useContext(Authcontext)


    const handlechange = (e)=>{

        setcredentials((prev)=>({...prev, [e.target.id]:e.target.value}))

        // we are taking the previous value and returning it together with credetential name using the id 

    }


    const handleclick =()=>{

        
    }




  return (


    <>


        <div className="login">


            <div className="lcont">

                <input type="text" placeholder='username' onChange ={handlechange} id="username" className='input'/>

                <input type="password" placeholder='password' onChange ={handlechange} id="password" className='input'/>

                <button onClick = {handleclick} className="bnt">Login</button>

                {error && <span>{error.message}</span>}




            </div>









        </div>





    </>
    


  )
}

export default Login