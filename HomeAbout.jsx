import React, { useEffect, useState, useRef } from 'react'
import './about.css'
import Bg1 from '../../assets/bg1Flip.jpg'
import ABImg1 from '../../assets/AboutBox1.png'
import AboutCard from './AboutCard' // This component needs the "larger text" changes
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation, Link } from 'react-router-dom'


const wordPopVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, type: 'spring', stiffness: 100 },
    }),
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const HomeAbout = () => {
    // Animation helpers
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });
    const [hideBtn, setHideBtn] = useState(false)
    const location = useLocation().pathname
    const MotionLink = motion(Link)

    useEffect(() => {
        if (location === "/about-us") {
            setHideBtn(true)
        } else {
            setHideBtn(false)
        }
    }, []) // Note: This useEffect only runs once. If you navigate, it won't update.
           // You may want to add `location` to the dependency array: [location]

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [inView, controls]);

    const splitText = (text) => text.split(" ").map((word, i) => (
        <motion.span
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={wordPopVariant}
            className="inline-block mr-1"
        >
            {word}
        </motion.span>
    ));

    return (
        <div className='h-fit md:h-fit  w-full flex justify-center items-center bg-cover bg-no-repeat bg-black bg-center ' style={{ backgroundImage: `url(${Bg1})` }}>
            <div className='h-full w-[90%] flex justify-between items-center flex-col md:flex-row gap-[20px] mt-[80px] md:mt-[0]'>
                <div
                    className="basis-[32%] md:basis-[30%] h-[85%] w-full flex justify-center items-center flex-col"
                    style={{ fontFamily: "Inter" }}
                    ref={ref}
                >
                    {/* <h2 className="titleText mb-[20px] md:mb-[0] text-center">
                        {splitText("About us")}
                    </h2> */}
                    <div className="h-fit w-full rounded-[20px] flex justify-start gap-[20px] items-center md:items-center flex-col px-[20px] md:px-[45px] py-[20px] md:py-[40px] bg-[rgba(128,128,128,0.2)] shadow-lg backdrop-blur-[5px] aboutheight">
                        <h3 className="secondaryTitle text-white text-center">
                            {splitText("Our Values")}
                        </h3>
                        {/* <h4 className="tertiaryTitle text-white">
                            {splitText("Lorem ipsum dolor sit")}
                        </h4> */}
                        
                    </div>
                </div>

                {/* --- MODIFIED DESKTOP CARD LAYOUT (Background contains cards) --- */}
                
<div className='basis-[67%] w-full hidden md:flex justify-center items-center py-10'>
    {/* Translucent background container */}
    <div className='max-w-4xl w-full rounded-[20px] bg-[rgba(128,128,128,0.2)] shadow-lg backdrop-blur-[5px] p-10 pb-20'>
        {/* Grid for cards */}
        <div className='grid grid-cols-2 gap-x-8'>
            
            {/* --- Left Column --- */}
            <div className='flex flex-col gap-y-8'>
                {/* Card 1 */}
                <div className="flex-1 min-h-[400px]"> 
                    <AboutCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield h-10 w-10 text-white"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>}
                        title="Heading1"
                        subText="Clarity over noise"
                        desc="We focus on what truly matters—long-term value creation rooted in strong fundamentals, not fleeting market trends."
                    />
                </div>
                {/* Card 2 */}
                <div className="flex-1 min-h-[400px]">
                    <AboutCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code h-10 w-10 text-white"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    }
                        title="Heading1"
                        subText="Efficiency that counts"
                        desc="Reduce costs through smart infrastructure, automation and thoughtful decisionsBy leveraging smart infrastructure, automation, and deliberate decision-making, we minimize friction and cost—enhancing both scale and outcomes for our investors."
                    />
                </div>
            </div>

            {/* --- Right Column (Restored from our previous conversation) --- */}
            <div className='flex flex-col gap-y-8 mt-16'>
                {/* Card 3 */}
                <div className="flex-1 min-h-[400px]">
                    <AboutCard icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-10 w-10 text-white"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    }
                        title="Heading1"
                        subText="Built for life"
                        desc="Our portfolios are designed to evolve with you—adapting to your changing goals, needs, and life stages."
                    />
                </div>
                
                {/* --- THIS IS THE ONLY CHANGE --- */}
                {/* Card 4: Added mt-16 to push this card *even further* down */}
                <div className="flex-1 min-h-[400px] mb-[-60px]"> 
                    <AboutCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart h-10 w-10 text-white"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                    }
                        title="Heading1"
                        subText="Trust by design"
                        desc="Transparent pricing. No hidden fees. No surprises. Just a commitment to clarity and integrity in every interaction."
                    />
                </div>
            </div>
            
        </div>
    </div>
</div>



                {/* --- UNCHANGED MOBILE CARD LAYOUT --- */}
                <div className='basis-[68%] h-[full] w-full flex justify-start gap-[20px] items-center flex-col md:flex-row md:hidden '>
                    <div className='basis-[48%] h-full w-full flex justify-between items-center flex-col md:flex-row'>
                        <div className='basis-[48%] h-full w-full'>
                            <AboutCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-10 w-10 text-white" data-lov-id="src/pages/AboutUs.tsx:8:10" data-lov-name="Shield" data-component-path="src/pages/AboutUs.tsx" data-component-line="8" data-component-file="AboutUs.tsx" data-component-name="Shield" data-component-content="%7B%22className%22%3A%22h-20%20w-20%20text-white%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>}
                                title="Heading1"
                                subText="Clarity over noise"
                                desc="We focus on what truly matters—long-term value creation rooted in strong fundamentals, not fleeting market trends."
                            />
                        </div>
                        <br/>
                        <div className='basis-[48%] h-full w-full '>
                            <AboutCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code h-10 w-10 text-white" data-lov-id="src/pages/AboutUs.tsx:14:10" data-lov-name="Code" data-component-path="src/pages/AboutUs.tsx" data-component-line="14" data-component-file="AboutUs.tsx" data-component-name="Code" data-component-content="%7B%22className%22%3A%22h-20%20w-20%20text-white%22%7D"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            }
                                title="Heading1"
                                subText="Efficiency That Counts"
                                desc="By leveraging smart infrastructure, automation, and deliberate decision-making, we minimize friction and cost—enhancing both scale and outcomes for our investors."
                            />
                        </div>
                    </div>
                    <div className='basis-[48%] h-full w-full flex justify-between items-center flex-col md:flex-row mb-[80px]'>
                        <div className='basis-[48%] h-full w-full pt-[10px]'>
                            <AboutCard icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-10 w-10 text-white" data-lov-id="src/pages/AboutUs.tsx:20:10" data-lov-name="Users" data-component-path="src/pages/AboutUs.tsx" data-component-line="20" data-component-file="AboutUs.tsx" data-component-name="Users" data-component-content="%7B%22className%22%3A%22h-20%20w-20%20text-white%22%7D"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            }
                                title="Heading1"
                                subText="Built for life"
                                desc="Our portfolios are designed to evolve with you—adapting to your changing goals, needs, and life stages."
                            />
                        </div>
                        <br/>
                        <div className='basis-[48%] h-full w-full '>
                            <AboutCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart h-10 w-10 text-white" data-lov-id="src/pages/AboutUs.tsx:26:10" data-lov-name="Heart" data-component-path="src/pages/AboutUs.tsx" data-component-line="26" data-component-file="AboutUs.tsx" data-component-name="Heart" data-component-content="%7B%22className%22%3A%22h-20%20w-20%20text-white%22%7D"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                                }
                                title="Heading1"
                                subText="Trust, by Design"
                                desc="Transparent pricing. No hidden fees. No surprises. Just a commitment to clarity and integrity in every interaction."
                            />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomeAbout