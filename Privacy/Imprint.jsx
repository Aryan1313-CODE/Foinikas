import React from 'react'

const Imprint = () => {
    return (
        <div className='h-auto w-full flex justify-center items-center bg-[#1f0713]'>
            <div className='h-auto w-[90%] px-[50px] py-[40px] rounded-[12px] my-[10%] gap-[30px] flex justify-evenly items-start flex-col bg-[rgba(255,255,255,0.1)] backdrop-blur-[15px]'>

                <h4 className='secondaryTitle text-white'>Imprint</h4>

                <div className=''>
                    <p className='paragraph'>This imprint was last updated on May 14, 2025.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>Owner of this Website</h5>
                <div className=''>
                    <p className='paragraph'>Foinikas Wealth Management Ltd</p>
                    <p className='paragraph'>30/3, Kenilworth Court</p>
                    <p className='paragraph'>Sir Augustus Bartolo Street</p>
                    <p className='paragraph'>Ta’ Xbiex</p>
                    <p className='paragraph'>XBX 1093 Malta</p>
                    <p className='paragraph'>Malta</p>
                    <p className='paragraph'>Email: <a href="mailto:info@foinikaswealth.com">info@foinikaswealth.com</a></p>
                    <p className='paragraph'>Phone number: +356 23479856</p>
                </div>

                <h5 className='tertiaryTitle text-white'>1. General</h5>
                <div className=''>
                    <p className='paragraph'>1.1 We are registered at <a href="https://www.mfsa.mt/financial-services-register/">Malta Financial Services Authority</a> under the license or registration number:</p>
                    <p className='paragraph ml-[60px]'>FWM-23479</p>

                    <p className='paragraph'>1.2 The name of our supervisory authority is:</p>
                    <p className='paragraph ml-[60px]'>Malta Financial Services Authority</p>

                    <p className='paragraph'>We are not willing or obliged to participate in dispute resolution procedures before a consumer arbitration board.</p>
                </div>

            </div>
        </div>
    )
}

export default Imprint
