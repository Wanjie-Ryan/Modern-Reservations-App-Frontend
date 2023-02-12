import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'




function List() {



  return (

    <>

    {/* the type is a prop that checks if list is there then the header is removed */}
    
    <div><Navbar/> <Header type ='list'/></div>
    
    
    </>
    
  )
}

export default List