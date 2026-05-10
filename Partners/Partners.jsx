import React from 'react'
import Bg from '../../assets/main31.png'
import Bg1 from '../../assets/main12.jpg'
import PartnerTop from './PartnerTop'
import PartnerBottom from './PartnerBottom'
import PartnersCTA from './PartnersCTA'
// import Management from './Management'



const Partners = () => {
  return (
    <div className='h-[1500px] md:h-[120vh] w-full flex justify-center items-center bg-black bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url("${Bg1}")` }}>
      <div className='h-full w-[90%] flex justify-center items-center flex-col gap-[35px]'>
        {/* <div className='basis-[20%] md:basis-[35%] h-full w-full rounded-[12px]  flex justify-around items-center flex-col px-[20px] md:px-[50px]'>
          <PartnerTop />
        </div> */}
        {/* <div className='basis-[44%] h-full w-full hidden md:flex justify-between items-start flex-row'>
          <PartnerBottom/>
        </div> */}

        <div className='basis-[80%]  h-full w-full rounded-[12px]  flex justify-around items-center flex-col px-[20px] md:px-[50px]'>
          <PartnersCTA/>
        </div>
      </div>

    </div>
  )
}

export default Partners
