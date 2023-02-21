import React from 'react'
import './searchitem.css'

function Searchitem() {



  return (

    <>
    


    <div className='searchitem'>

        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" alt="" className="simg" />

        <div className="sdesc">

            <h1 className="stitle">Tower Street Apartments</h1>
            <span className="sdistance">500m from center</span>
            <span className="staxi">Free airport taxi</span>
            <span className="subtitle">Studio Apartment with Air conditioning</span>
            <span className="sfeatures">Entire studio &#8226; 1 bathroom &#8226; 21m<sup>2</sup> 1 full bed</span>
            <span className="cancel">Free Cancellation</span>
            <span className="cancelsubtitle">
                You can cancel later, so look in this great price today!
            </span>



        </div>


        <div className="sdetails">

            <div className="srating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>

            <div className="detailstext">
                <span className="sprice">$112</span>
                <span className="staxi">Includes taxes and fees</span>
                <button className="scheckbutton">See availability</button>
            </div>


        </div>


    </div>



    </>
  )
}

export default Searchitem