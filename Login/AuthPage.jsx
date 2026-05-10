import React, { use, useState } from 'react'
import Bg from '../../assets/bg1Flip.jpg'
import SmallLoader from '../Loading/SmallLoader';
import AuthLeft from './Auth/AuthLeft';
import AuthRight from './Auth/AuthRight';
import ForgotModal from './Auth/ForgotModal';
import Footer from '../Footer/Footer';


const AuthPage = () => {

  const [show, setShow] = useState(false)
  return (
    <>
    <div className='h-[1100px] md:h-[120vh] w-full bg-cover bg-center flex justify-between items-end flex-row adjustform' style={{ backgroundImage: `url("${Bg}")` }}>
      {!show && <div className='basis-[35%] h-[95%] w-full hidden md:block'>
        <AuthLeft />
      </div>}
      {!show && <div className='md:basis-[60%] h-[95%] w-full'>
        <AuthRight setShow={setShow} />
      </div>}
      {show &&
        <div className='h-full w-full bg-[rgba(255,255,255,0.4)] flex justify-center items-center'>
          <ForgotModal setShow={setShow}/>
        </div>
      }
    </div>
    <Footer/>
    </>
  )
}

export default AuthPage
