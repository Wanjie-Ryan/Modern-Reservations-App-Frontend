import React, {useContext} from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';
import { Authcontext } from '../../context/authcontext';

function Navbar() {


  const {user} = useContext(Authcontext)

  return (

    <>
    
        

          
          
          <div className="navbar">

          
                <div className="navcontainer">
                  <Link to ='/' style={{color:'inherit', textDecoration:'none'}}>
                    <span className="logo">Rawa</span> 
                  </Link>   

                    {user ? <span>Welcome, <b>{user.username}</b></span> :

                      <div className="navitems">


                          <Link to ='/register'><button className="navbutton">Register</button></Link>

                          <Link to ='/login'><button className="navbutton">LogIn</button></Link>


                      </div>
                   }
                    
                </div>    
           

        </div>
        
        



            


    </>


  )
}

export default Navbar