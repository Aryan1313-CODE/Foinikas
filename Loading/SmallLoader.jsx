import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import loaderAnimation from '../../assets/loader.json'


const SmallLoader = ({ isVisible }) => {
  
  

  return (
    <div
     className='h-[200px] absolute bottom-[0]'
    >
     
        <Lottie className='h-full' animationData={loaderAnimation} loop={true} />
    
      
    </div>
  )
}

export default SmallLoader
