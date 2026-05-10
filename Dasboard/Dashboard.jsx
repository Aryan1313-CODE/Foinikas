import React from 'react'
import Bg1 from '../../assets/bg1.jpg';

const Dashboard = () => {
  return (
    <div
          className='bg-black h-[775px] w-full flex justify-center items-center flex-col gap-[20px] bg-center bg-cover bg-no-repeat'
          style={{ backgroundImage: `url("${Bg1}")` }}
        >
      <h3 className='secondaryTitle text-white'>Coming Soon...</h3>
    </div>
  )
}

export default Dashboard
