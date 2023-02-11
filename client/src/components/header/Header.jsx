import React, {useState} from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faPlane, faCar, faTaxi, faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns';
//transforms the date function into readable strings

function Header() {



    const[ opendate, setopendate] = useState(false)

    const[date, setDate] = useState([{

        startDate: new Date(),
        endDate:new Date(),
        key:'selection'

    }])

    const [openoptions, setopenoptions] = useState(false)
    const [options, setoptions] = useState({

        adult:1,
        children:1,
        room:1 
    })


  return (

    <>

        <div className="header">
          <div className="headercontainer">

            <div className="headerlist">

                <div className="headerlistitem active">

                    
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>

                <div className="headerlistitem">

                    
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>

                <div className="headerlistitem">

                    
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car rentals</span>
                </div>

                <div className="headerlistitem">

                    
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Attractions</span>
                </div>

                <div className="headerlistitem">

                    
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport Taxi</span>
                </div>
            </div>

                <h1 className="headertitle">A lifetime of discounts? It's Genius</h1>

                <p className="headerdesc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Rawa account</p>

                <button className="headerbtn">Sign In / Register</button>

                <div className="headersearch">

                    <div className="headersearchitem">

                        <FontAwesomeIcon icon ={faBed} className ='headericon'/>

                        <input type ='text' placeholder='where are you going?' className='headersearchinput'/>

                    </div>

                    <div className="headersearchitem">

                        <FontAwesomeIcon icon ={faCalendarDays} className ='headericon'/>

                       <span onClick = {()=>setopendate(!opendate)} className="headersearchtext">{` from ${format(date[0].startDate, 'MM/dd/yyyy')} to ${(format(date[0].endDate, 'MM/dd/yyy'))}`}</span>


                        {/* // by default the date will be hidden by the help of the useState function. */}

                      {opendate && <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className ='date'
                        />}
                    </div>

                    <div className="headersearchitem">

                        <FontAwesomeIcon icon ={faBed} className ='headericon'/>

                       <span className="headersearchtext">{`${options.adult} adult ${options.children} children ${options.room} room` }</span>

                       <div className="options">

                        <div className="optionitem">
                            <span className="optiontext">Adult</span>

                            <div className="optioncounter">
                                <button className="optioncounterbtn" >-</button>
                                <span className="optioncounternum">1</span>
                                <button className="optioncounterbtn">+</button>
                            </div>

                        </div>


                        <div className="optionitem">
                            <span className="optiontext">Children</span>

                            <div className="optioncounter">

                                <button className="optioncounterbtn">-</button>

                                <span className="optioncounternum">1</span>
                                <button className="optioncounterbtn">+</button>

                            </div>
                        </div>

                        
                        <div className="optionitem">
                            <span className="optiontext">Room</span>

                            <div className="optioncounter">
                            
                                <button className="optioncounterbtn">-</button>
                                <span className="optioncounternum">1</span>
                                <button className="optioncounterbtn">+</button>
                            </div>

                        </div>





                       </div>

                    </div>


                    <div className="headersearchitem">

                       <button className="headerbtn">Search</button>

                    </div>





                </div>
          </div>
        </div>
            

    </>


  )
}

export default Header