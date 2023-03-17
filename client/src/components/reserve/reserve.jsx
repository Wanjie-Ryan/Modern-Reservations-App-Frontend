import React from 'react'
import './reserve.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


function Reserve({setopen, id}) {

    //set open is passed as a prop for the modal opening and closing while id is the id for the specific hotel that has been opened.


  return (


    <>


    
        <div className='reserve'>
            <div className="rcontainer">

                <FontAwesomeIcon icon ={faCircleXmark} className= 'rclose' onClick ={()=>setopen(false)}/>

                <span>Select your rooms: </span>





            </div>

     
        </div>
    
    
    </>





  )
}

export default Reserve