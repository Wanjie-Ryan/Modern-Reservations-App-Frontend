import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faPlane, faCar, faTaxi} from '@fortawesome/free-solid-svg-icons'




function Header() {



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
          </div>
        </div>
            

    </>


  )
}

export default Header