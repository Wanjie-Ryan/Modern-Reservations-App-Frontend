import React from 'react'
import './reserve.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import usefetch from '../../hooks/usefetch'




function Reserve({setopen, hotelid}) {

    //set open is passed as a prop for the modal opening and closing while id is the id for the specific hotel that has been opened.


    const {data, loading, error} = usefetch(`http://localhost:3001/api/hotels/room/${hotelid}`)

    console.log(data)


  return (


    <>


    
        <div className='reserve'>
            <div className="rcontainer">

                <FontAwesomeIcon icon ={faCircleXmark} className= 'rclose' onClick ={()=>setopen(false)}/>

                <span>Select your rooms: </span>

                {data.map((item)=>(

                  <div className="ritem">

                    <div className="rtitle">{item.title}</div>
                    <div className="rdesc">{item.description}</div>
                    <div className="rmax">Max People: <b>{item.maxpeople}</b></div>

                    <div className="rprice">{item.price}</div>

                    <div className="room">

                      {item.roomnumbers.map(num=>{


                      })}


                    </div>


                  </div>


                ))}





            </div>

     
        </div>
    
    
    </>





  )
}

export default Reserve