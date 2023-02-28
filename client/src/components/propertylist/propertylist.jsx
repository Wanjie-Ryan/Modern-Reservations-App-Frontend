import React from 'react'
import './propertylist.css'
import usefetch from '../../hooks/usefetch'



function propertylist() {

   const {data, loading, error} = usefetch('http://localhost:3001/api/hotels/countbytype')

   console.log(data)



  return (



    <>
    
    
     <div className="plist">

     {loading ? 'loading,please wait...' : <><div className="plistitem">


           <img src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=" alt="" className="plistimg" /> 

           <div className="plisttitles">

                <h1>Hotels</h1>
                <h1>{data.count}</h1>


           </div>
        </div>


        <div className="plistitem">


           <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className="plistimg" /> 

           <div className="plisttitles">

                <h1>Apartments</h1>
                <h1>2331 Hotels</h1>


           </div>
        </div>



        <div className="plistitem">


           <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" className="plistimg" /> 

           <div className="plisttitles">

                <h1>Resorts</h1>
                <h1>2331 Hotels</h1>


           </div>
        </div>



        <div className="plistitem">


           <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" className="plistimg" /> 

           <div className="plisttitles">

                <h1>Villas</h1>
                <h1>2331 Hotels</h1>


           </div>
        </div>



        <div className="plistitem">


           <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" className="plistimg" /> 

           <div className="plisttitles">

                <h1>Cabins</h1>
                <h1>2331 Hotels</h1>


           </div>


        </div></>}


    </div>
    
    
    </>
  )
}

export default propertylist