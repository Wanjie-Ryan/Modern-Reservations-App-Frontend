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

    const [users, load, errors, dispatch] = useContext(RegContext)

    const navigate = useNavigate()


    const handleChange = (e)=>{


        setdetails((prev)=>({...prev, [e.target.id]:e.target.value}))


    }


    const submit = async(e)=>{

        e.preventDefault()

        dispatch({type:'regstart'})

        try{

            const register = axios.post('http://localhost:3001/api/auth/register', details)

            dispatch({type:'regcomplete', payload:register.data})


            navigate('/')


        }

        catch(err){

            dispatch({type:'regfail', payload:err.response.data})
        }




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


                
                <button className="btn" disabled = {load} onClick ={submit}>Register</button>

                {errors && <span className='error'>{errors.message}</span>}




            </div>



        </div>
    



    
    </>


    
  )
}

export default Reg