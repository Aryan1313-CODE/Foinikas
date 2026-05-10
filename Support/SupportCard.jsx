import React from 'react'
import './support.css'


const SupportCard = ({ title, icon }) => {
    return (
        <div className='h-full w-full flex justify-center items-end pb-[30px] relative group'>
            <div className={`border-[1px] bg-[#311B9200] support-card-bg ${title === "Visit Our Blog" ? "border-[#651FFF]" :
                title === "Developer Guide" ? "border-[#00E5FF]" :
                    title === "Ask For Help" ? "border-[#FF4081]" : ""} h-[80%] w-[85%] rounded-[20px]`}
                style={{ boxShadow: "0px 0px 49px -2px #00000030" }}
            >

            </div>
            <div className={`h-[80%] w-[85%] bg-[#180D48] absolute support-card border-[1px]
        flex justify-end items-center flex-col  ${title === "Visit Our Blog" ? "border-[#651FFF]" :
                    title === "Developer Guide" ? "border-[#00E5FF]" :
                        title === "Ask For Help" ? "border-[#FF4081]" : ""}`}
                style={{
                    boxShadow: "0px 0px 49px -2px #00000030"
                }}
            >
                <img src={icon} alt="" className='absolute top-[-20%] support-icon' />
                <div className='basis-[60%] h-full w-full flex justify-center items-center flex-col gap-[20px] px-[25px]'>
                    <h5 className='tertiaryTitle text-white'>{title}</h5>
                    <p className='paragraph text-center'>Nam sollicitudin dignissim nunc cursus ullamcorper </p>
                </div>
            </div>
        </div>
    )
}

export default SupportCard


