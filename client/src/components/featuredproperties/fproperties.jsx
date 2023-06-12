import React from 'react'
import './fproperties.css'
import usefetch from '../../hooks/usefetch'
import des1 from '../../Images/destination1.jpg'
import { FaSpinner } from 'react-icons/fa';



function Fproperties() {

   const {data, loading, error} = usefetch('http://localhost:3001/api/hotels?featured=true')

  //  const {data, loading, error} = usefetch('https://mystic-api.onrender.com/hotels?featured=true')


    // console.log(data)


  return (

    <>


            <div className="fp">
    
               {loading ? <div className="loading">
                <FaSpinner className="spinner" />
                <p>Loading...</p>
                </div> :<>


               {data.map((item)=>(

                <div className="fpitem" key = {item._id}>

                   {item.photo ? <img src={item.photo[0]} alt="" className="fpImg" /> : <> 


                   <img src={des1} alt="" className="fpImg" />

                   
                   </>}

                    <span className="fpname">{item.name}</span>
                    <span className="fpcity">{item.city}</span>
                    <span className="fpprice">starting from ${item.cheapestprice}</span>

                    {item.rating && <div className="fprating">
                        <button>{item.rating}</button>
                        <span>Excellent</span>
                    </div>}

                </div>))}

                </>}

                
            </div>
            

    </>


  )
}

export default Fproperties