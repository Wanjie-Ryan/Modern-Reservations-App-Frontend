import React, {useContext, useState} from 'react'
import './reg.css'
import {RegContext} from '../../context/regcontext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function Reg() {


    const [details, setdetails] = useState({

        username:undefined,
        email:undefined,
        password:undefined,
        admin:undefined

    })

    const [user, loading, error, dispatch] = useContext(RegContext)

    const navigate = useNavigate()


    const handleChange = ()=>{



    }


    const submit = ()=>{



        
    }




  return (


    <>
    
    

        <div className="mainreg">



            <div className="inner-reg">

            <p className='reg-p'>Register to Mystic Travels</p>

                <div className="inner">
                    <label className='lbls'>Username:</label>
                    <input type="text" placeholder = 'username' id = 'username' className="reg" onChange={handleChange} />
                </div>


                <div className="inner">
                    <label className='lbls'>Email:</label>
                    <input type="email" placeholder = 'email' onChange={handleChange} id = 'email' className="reg" />
                </div>

                <div className="inner">
                    <label className='lbls'>Password:</label>
                    <input type="password" onChange={handleChange}placeholder = 'password' id = 'password' className="reg" />
                </div>


                <div className="inner">
                    <label className='lbls'>Admin:</label>
                    <input type="checkbox" id = 'admin' className="reg" />
                </div>


                
                <button className="btn" onClick ={submit}>Register</button>



            </div>



        </div>
    



    
    </>


    
  )
}

export default Reg