import React from 'react'
import './waves.css'

const Waves = () => {
  return (
    <div className='h-full w-full relative'>
      <div className='wave1  bg-[#87CEFA] h-full w-full absolute'></div>
      <div className='wave2 bg-[#E0FFFF] h-full w-full absolute'></div>
      {/* <div className='wave3 bg-[rgba(255,255,255,0.2)] h-full w-full absolute z-[-3]'></div> */}
    </div>
  )
}

export default Waves
