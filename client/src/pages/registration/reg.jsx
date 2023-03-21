import React from 'react'








function Reg() {






  return (


    <>
    
    

        <div className="mainreg">


            <label>Register to Mystic Travels</label>

            <div className="inner-reg">

                <div className="inner">
                    <label>Username:</label>
                    <input type="text" placeholder = 'username' id = 'username' className="reg" />
                </div>


                <div className="inner">
                    <label>Email:</label>
                    <input type="email" placeholder = 'email' id = 'email' className="reg" />
                </div>

                <div className="inner">
                    <label>Password:</label>
                    <input type="password" placeholder = 'password' id = 'password' className="reg" />
                </div>


                <div className="inner">
                    <label>Admin:</label>
                    <input type="checkbox" id = 'checkbox' className="reg" />
                </div>


                
                <button className="btn">Register</button>



            </div>



        </div>
    



    
    </>


    
  )
}

export default Reg