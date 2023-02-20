import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './list.css'



function List() {



  return (

    <>

        {/* the type is a prop that checks if list is there then the header is removed */}
    
        <div><Navbar/> <Header type ='list'/></div>

        <div className="listcontainer">

          <div className="listwrapper">

            <div className="listsearch">

              <h1 className="lstitle">Search</h1>

              <div className="lsitem">
                <label>Destination</label>

              </div>


              <div className="lsitem">
                <label>Destination</label>
                
              </div>


            </div>


            <div className="listresult">



            </div>


          </div>





        </div>
    
    
    </>
    
  )
}

export default List