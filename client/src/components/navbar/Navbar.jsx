import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom';


function Navbar() {
  return (

    <>
    
        <div className="navbar">
            <div className="navcontainer">
              <Link to ='/' style={{color:'inherit', textDecoration:'none'}}>
                <span className="logo">Rawa</span> 
              </Link>   

                <div className="navitems">

                    <button className="navbutton">Register</button>
                    <button className="navbutton">LogIn</button>


                </div>
                 
            </div>      

        </div>



            


    </>


  )
}

export default Navbar