import React from 'react'
import { Link } from 'react-router-dom'
import AuthCard from './AuthCard'

const AuthRight = ({setShow}) => {
    return (
        <div className=' h-full pb-[30px] w-full flex items-center gap-[25px] flex-col adjustform'>
            <div className='basis-[8%] h-full w-[70%] flex justify-center items-center flex-col'>
                <h2 className='titleText text-center topping' style={{fontFamily:"Satoshi"}}>Welcome to Foinikas</h2>
                <p className='paragraph py-[15px] md:py-0'>Your journey to smarter investing starts here</p>
            </div>
            <div className='w-[90%] md:w-[65%]'>
                <AuthCard setShow={setShow}/>
            </div>
            <div className='basis-[18%] pb-[10px] pt-[10px] h-full w-[90%] md:w-[65%] rounded-[12px] bg-[rgba(255,255,255,0.3)] flex justify-center items-center flex-col px-[20px] gap-[15px]'
                style={{ boxShadow: "2px 2px 5px #000",
                    // background: "linear-gradient(to right, #f0fdf4 50%, #eff6ff)"
                 }}
            >
                <h3 className='flex justify-center items-center flex-row tertiaryTitle text-white gap-[5px] abouttitle'>
                  <span className='text-[25px] font-[500] relative top-[3px]'><ion-icon name="call-outline"></ion-icon></span>  
                    Regulated & Secure
                </h3>
                <p className='paragraph text-center forauthleft'>Schedule a personalized consultation with our wealth management team</p>
                <Link to={"/book"} className='primary-btn flex justify-center items-center forauthleft'>Schedule a call</Link>
            </div>
        </div>
    )
}

export default AuthRight
