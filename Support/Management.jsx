import React from 'react'
import { Link } from 'react-router-dom'

import './support.css'

const Management = () => {
    return (
        <div className='h-full w-full flex justify-between items-center flex-row relative md:top-[60px]' >
            <div className=' md:basis-[35%] h-[90%] w-full flex justify-start items-start flex-col gap-[30px] '>
                <h2 className='titleText'
                    style={{ lineHeight: "40px" }}
                >Wealth management for next generation Investors</h2>
                <p className='paragraph'>Built for the modern investor who demands more. Our platform combines cutting-edge technology with time-tested investment principles to help you build and preserve wealth for the future.</p>
                <Link to={"/book"} className="flex justify-center items-center secondary-btn">Let's Talk</Link>
            </div>
            <div className='basis-[60%] h-full w-full hidden md:flex justify-between items-start flex-row'>
                <div className='basis-[32%] pCard h-[70%] w-full bg-[red] px-[20px] rounded-[12px] flex justify-center items-center flex-col gap-[20px]'
                    style={{ background: "linear-gradient(to bottom right, #4338ca, #9333ea, #3b82f6)" }}
                >
                    <div className='h-[17%] w-[25%] bg-[rgba(255,255,255,0.3)] flex justify-center items-center rounded-[12px] border-white border-[0.5px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-computer w-8 h-8 text-white" data-lov-id="src/components/home/ServicesGrid.tsx:7:10" data-lov-name="Computer" data-component-path="src/components/home/ServicesGrid.tsx" data-component-line="7" data-component-file="ServicesGrid.tsx" data-component-name="Computer" data-component-content="%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D"><rect width="14" height="8" x="5" y="2" rx="2"></rect><rect width="20" height="8" x="2" y="14" rx="2"></rect><path d="M6 18h2"></path><path d="M12 18h6"></path></svg>
                    </div>
                    <h3 className='tertiaryTitle text-center text-white'>Portfolio Management</h3>
                    <p className='paragraph text-center'>Custom portfolios, professionally managed and tailored to your goals</p>

                </div>
                <div className='basis-[32%] h-[70%] pCard w-full bg-[red] px-[20px] rounded-[12px] flex justify-center items-center flex-col gap-[20px]'
                    style={{ background: "linear-gradient(to bottom right, #db2777, #a855f7)" }}
                >
                    <div className='h-[17%] w-[25%] bg-[rgba(255,255,255,0.3)] flex justify-center items-center rounded-[12px] border-white border-[0.5px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-bar w-8 h-8 text-white" data-lov-id="src/components/home/ServicesGrid.tsx:16:10" data-lov-name="ChartBar" data-component-path="src/components/home/ServicesGrid.tsx" data-component-line="16" data-component-file="ServicesGrid.tsx" data-component-name="ChartBar" data-component-content="%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16h8"></path><path d="M7 11h12"></path><path d="M7 6h3"></path></svg>
                    </div>
                    <h3 className='tertiaryTitle text-center text-white'>Wealth Structuring</h3>
                    <p className='paragraph text-center'>Independent, unbiased guidance through inhouse and external specialists</p>

                </div>
                <div className='basis-[32%] h-[70%] pCard w-full bg-[red] px-[20px] rounded-[12px] flex justify-center items-center flex-col gap-[20px]'
                    style={{ background: "linear-gradient(to bottom right, #4338ca, #9333ea, #3b82f6)" }}
                >
                    <div className='h-[17%] mt-[20px] w-[25%] bg-[rgba(255,255,255,0.3)] flex justify-center items-center rounded-[12px] border-white border-[0.5px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-coins w-8 h-8 text-white" data-lov-id="src/components/home/ServicesGrid.tsx:29:10" data-lov-name="HandCoins" data-component-path="src/components/home/ServicesGrid.tsx" data-component-line="29" data-component-file="ServicesGrid.tsx" data-component-name="HandCoins" data-component-content="%7B%22className%22%3A%22w-8%20h-8%20text-white%22%7D"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path><path d="m2 16 6 6"></path><circle cx="16" cy="9" r="2.9"></circle><circle cx="6" cy="5" r="3"></circle></svg>
                    </div>
                    <h3 className='tertiaryTitle text-center text-white'>Financial Planning</h3>
                    <p className='paragraph text-center mt-[10px]'>Holistic projection of financial flows today and into the future</p>

                </div>
            </div>
        </div>
    )
}

export default Management
