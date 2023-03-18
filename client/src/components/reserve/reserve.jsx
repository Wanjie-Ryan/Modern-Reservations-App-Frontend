import React, {useState, useContext} from 'react'
import './reserve.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import usefetch from '../../hooks/usefetch'
import { Searchcontext } from '../../context/searchcontext'



function Reserve({setopen, hotelid}) {

    //set open is passed as a prop for the modal opening and closing while id is the id for the specific hotel that has been opened.


    const {data, loading, error} = usefetch(`http://localhost:3001/api/hotels/room/${hotelid}`)

    console.log(data)


    const [selectedrooms, setselectedrooms] = useState([])


    const handlechange =(e)=>{


        const checked = e.target.checked

        // checks if the checkbox has been selected.

        const value = e.target.value

        setselectedrooms(checked ? [...selectedrooms, value] : selectedrooms.filter((item)=>item !== value))

        // It checks if the checkbox has been checked, gets the value of the checkbox, and updates the selectedrooms state array accordingly. If the checkbox is checked, it adds the room ID to the array, and if the checkbox is unchecked, it removes the room ID from the array.

    }

    const {date} = useContext(Searchcontext)

    // console.log(selectedrooms)

    const handleclick =()=>{




    }


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


                      {item.roomnumbers.map((num)=>(

                        <div className="room">
                        
                            <label>{num.number}</label>

                            <input type ='checkbox' value ={num._id} onChange ={handlechange}/>


                        </div>
                      ))}

                  </div>

                ))}


                <button  onClick = {handleclick} className="rbtn"> Reserve now!</button>





            </div>

     
        </div>
    
    
    </>





  )
}

export default Reserve