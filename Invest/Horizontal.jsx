import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lottie from 'lottie-react'
import boatAnimation from '../../assets/Boat.json'
import lineAnimation from '../../assets/dottedLines.json'
import './invest.css';


import Car1 from '../../assets/car1.png';
import Car2 from '../../assets/Car2.png';
import Car3 from '../../assets/Car3.png';
import Car4 from '../../assets/Car4.png';
import Car5 from '../../assets/Car5.png';
import ArrowDot from '../../assets/dashed-arrow.png'
import ArrowDot2 from '../../assets/dashed-arrow-2.png'
import ArrowDot3 from '../../assets/dashed-arrow-3.png'
import ArrowDot4 from '../../assets/dashed-arrow-4.png'

import MoneyPlant from '../../assets/moneyPlant.png'
import WeighScale from '../../assets/weighScale.png'
import Shield from '../../assets/shield.png'
import Cash from '../../assets/cash.png'
import Globe from '../../assets/globe.png'
import Robot from '../../assets/robot.png'
import Analytics from '../../assets/analytics.png'
import Stocks from '../../assets/stocks.png'


// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const containerRef = useRef(null);
    const panelsRef = useRef([]);
    const boatRef = useRef(null);


    const headingRef = useRef([]);
    const [hovering, setHovering] = useState(false);
    const textRef = useRef(null)
    const [coords, setCoords] = useState({ x: '50%', y: '50%' });

    headingRef.current = [];

    const addToRefs = (el) => {
        if (el && !headingRef.current.includes(el)) {
            headingRef.current.push(el);
        }
    };

    const handleMouseMove = (e) => {
        const rect = textRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({ x: `${x}px`, y: `${y}px` });
    };

    const items = [
        { id: 1, title: "Precision Allocation", content: "We invest in fractional shares...", img: Car1 },
        { id: 2, title: "Tailored Hedging", content: "We structure client-specific hedging strategies...", img: Car2 },
        { id: 3, title: "Smart Order Execution", content: "We use IBKR's SmartRouting...", img: Car3 },
        { id: 4, title: "Portfolio Aggregation", content: "Our platform consolidates all client holdings...", img: Car4 },
        { id: 5, title: "Dynamic Yield", content: "We tap global fixed income markets...", img: Car5 },
        { id: 6, title: "Capital Efficiency", content: "Through IBKR's margin engine...", img: Car5 },
        { id: 7, title: "Institutional Access", content: "We blend direct indexing, global ETFs...", img: Car5 },
    ];

    // Add panel to ref array
    const addToPanelsRef = (el) => {
        if (el && !panelsRef.current.includes(el)) {
            panelsRef.current.push(el);
        }
    };

    useEffect(() => {
        if (panelsRef.current.length > 0 && containerRef.current) {
            const totalPanels = panelsRef.current.length;

            gsap.to(panelsRef.current, {
                xPercent: -100 * (totalPanels - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (totalPanels - 1),
                    end: () => `+=${window.innerWidth * (totalPanels - 1)}`, // Use viewport width
                    markers: false // Optional: shows scroll trigger markers for debugging
                }
            });

            ScrollTrigger.create({
  trigger: containerRef.current,
  start: "top top",
  end: () => `+=${window.innerWidth * (panelsRef.current.length - 1)}`, // keeps your scroll pin duration
  scrub: 1,
  onUpdate: (self) => {
    const progress = self.progress; // 0 → 1
    if (boatRef.current) {
      gsap.to(boatRef.current, {
        x: progress * (window.innerWidth - 350), // move up to 100vw - 350px
        ease: "power1.out",
        overwrite: true
      });
    }
  }
});



            // Cleanup function
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, []);



    return (
        <div className="app md:block hidden " >
            {/* <div className="first-container">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div> */}

            <div className="container relative bg-cover bg-center"
            
            ref={containerRef}>

                <div
                    ref={boatRef}
                    className="absolute  left-0 z-[10] boat-container"
                    style={{ width: '350px', height: '350px', transform: 'translateX(0%)' }}
                >
                    <Lottie animationData={boatAnimation} loop={true} />
                </div>


                <div className="panel shade description" ref={addToPanelsRef}>
                    <div className='h-full w-full flex justify-between items-center flex-row relative'>
                        {/* <div className='basis-[40%] h-full w-full bg-cover bg-center'
                            style={{ backgroundImage: `url("${Hscroll1}")` }}
                        ></div> */}
                        <div className="h-full w-full flex justify-center items-center flex-col ">
                            <div className='w-auto h-auto spotlight-container md:flex md:justify-center md:items-center leading-[normal]'>
                                <h1 className={`text-[5rem] text-white font-[900] text-center spotlight-text ${hovering ? 'hovering' : ''}`}
                                    data-text="Our Platform"
                                    ref={textRef}
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={() => setHovering(true)}
                                    onMouseLeave={() => setHovering(false)}
                                    style={{ fontFamily: "Crimson Pro", '--x': coords.x, '--y': coords.y }}
                                >Our Platform</h1>
                            </div>
                            <h3 className="text-2xl mt-4">How We Create Value for Clients: Built on infrastructure for the world’s most demanding investors</h3>
                            {/* <h4 className="text-lg mt-2">Built on infrastructure for the world’s most demanding investors</h4> */}
                        </div>
                        <img src={ArrowDot} className='absolute flip-horizontal left-[-10px] h-[75%]' alt="" />

                        <img src={MoneyPlant} className='absolute top-[10%] right-[5%] h-[30%]' alt="" />

                    </div>
                </div>


                <section className="panel shade flex justify-center items-center" ref={addToPanelsRef}>
                    <img src={ArrowDot2} className='absolute flip-horizontal left-[-14%] z-[2] h-[34%]' alt="" />
                    <img src={ArrowDot3} className='absolute left-[33%] z-[2] h-[18%] top-[52%] '
                        style={{ transform: "rotate(25deg)" }}
                        alt="" />
                    <div className='h-full w-[90%] flex justify-end items-center flex-row relative gap-[20px]'>
                        <div className='basis-[44%] h-fit w-[40%] bg-[#f6d465] px-[40px] py-[40px] rounded-[12px] absolute top-[12%] left-[0%] flex justify-between items-start flex-col gap-[15px] 2xl:h-[40%]'
                        >
                            <div className='basis-[15%] h-fit w-[auto] px-[20px] flex justify-center items-center  rounded-3xl border-[2px] border-black '>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black", fontWeight: "900" }}
                                >Precision</p>
                            </div>
                            <div className='basis-[50%] h-full w-[70%] flex justify-center items-center flex-col gap-[10px]'>
                                <h3 className='tertiaryTitle giventitle2'
                                    style={{ color: "black" }}
                                >Precision Allocation with Fractional Shares</h3>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black" }}
                                >Allows diversified investing with smaller allocations, reducing capital and transaction drag. We design customized portfolios that align with your specific goals, risk profile, and needs.</p>
                            </div>
                            <img src={WeighScale} className='h-[68%] absolute right-[-5%] bottom-[-7%] mr-[10] verywide' alt="" />

                        </div>
                        <div className='basis-[48%] h-[50%] w-full rounded-[12px] flex justify-between items-start flex-col gap-[15px] px-[40px] py-[40px] relative'
                            style={{ background: "linear-gradient(23deg, rgba(0, 157, 157, 1) 54%, rgba(0, 180, 180, 1) 67%)" }}
                        >

                            <div className='basis-[15%] h-full w-[auto] px-[20px] flex justify-center items-center  rounded-3xl border-[2px] border-black'>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black", fontWeight: "900" }}
                                >Protection</p>
                            </div>
                            <div className='basis-[50%] h-full w-[70%] flex justify-center items-center flex-col gap-[10px]'>
                                <h3 className='tertiaryTitle text-left mr-[150px] giventitle2'
                                    style={{ color: "black" }}
                                >Tailored Risk Mitigation</h3>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black" }}
                                >We structure client-specific hedging strategies using options, structured notes, and overlays—designed to protect against equity drawdowns, interest rate shocks, or FX risk.</p>
                            </div>
                            <img src={Shield} className='h-[68%] absolute right-[-5%] bottom-[-7%]' alt="" />
                        </div>
                    </div>
                </section>
                <section className="panel shade flex justify-center items-center" ref={addToPanelsRef}>
                    <img src={ArrowDot3} className='absolute left-[23%] z-[2] h-[18%] top-[58%]'
                        style={{ transform: "rotate(25deg)" }}
                        alt="" />

                    <img src={ArrowDot4} className='absolute left-[-20%] z-[2] h-[18%] top-[10%]'

                        alt="" />

                    <img src={ArrowDot4} className='absolute left-[47%] z-[2] h-[17%] top-[25%]'

                        alt="" />


                    <div className='h-full w-[90%] flex justify-between items-center flex-row relative'>
                        <div className='w-[32%] h-[42%] bg-[green] absolute top-[15%] px-[40px] py-[40px] rounded-[12px] flex justify-between items-start flex-col gap-[15px]'
                            style={{
                                background: "linear-gradient(23deg, rgba(173, 232, 244, 1) 40%, rgba(130, 201, 239, 1) 75%)"
                            }}
                        >
                            <div className='basis-[15%] h-full w-[auto] px-[20px] flex justify-center items-center  rounded-3xl border-[2px] border-black'>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black", fontWeight: "900" }}
                                >Execution</p>
                            </div>
                            <div className='basis-[50%] h-full w-[70%] flex justify-center items-center flex-col gap-[10px]'>
                                <h3 className='tertiaryTitle giventitle2'
                                    style={{ color: "black" }}
                                >Algorithmic & Smart Order Execution</h3>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black" }}
                                >Smart order routing and algorithmic order execution engine helps reduce slippage, improve pricing and maintain market neutrality during rebalancing—maximizing performance over time.

                                </p>
                            </div>
                            <img src={Robot} className='h-[40%] absolute right-[7%] top-[0%]' alt="" />
                        </div>
                        <div className='w-[28%] h-[40%] bg-[#FFF5EE] absolute top-[40%] left-[40%] px-[40px] py-[40px] rounded-[12px] flex justify-between items-start flex-col gap-[15px]'
                        // style={{background: "linear-gradient(23deg, rgba(255, 182, 193, 1) 40%, rgba(255, 105, 97, 1) 70%)"}}
                        >
                            <div className='basis-[15%] h-full w-[auto] px-[20px] flex justify-center items-center  rounded-3xl border-[2px] border-black'>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black", fontWeight: "900" }}
                                >Enhancement</p>
                            </div>
                            <div className='basis-[50%] h-full w-[90%] flex justify-center items-center flex-col gap-[10px]'>
                                <h3 className='tertiaryTitle w-full giventitle2'
                                    style={{ color: "black" }}
                                >Dynamic Yield Enhancement</h3>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black" }}
                                >We tap global fixed income markets, money market funds, and short-duration credit for better cash utilization. We also apply options overlays for those seeking enhanced income potential from equity exposure.</p>
                            </div>
                            <img src={Stocks} className='h-[32%] absolute right-[3%] top-[0%]' alt="" />
                        </div>
                        <div className='w-[32%] h-[50%] bg-[#E0B0FF] absolute top-[15%] right-[-5%] px-[40px] py-[40px] rounded-[12px] flex justify-between items-start flex-col gap-[15px]'
                        // style={{background: "linear-gradient(23deg, rgba(173, 232, 244, 1) 40%, rgba(130, 201, 239, 1) 75%)"}}
                        >
                            <div className='basis-[15%] h-full w-[auto] px-[20px] flex justify-center items-center  rounded-3xl border-[2px] border-black'>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black", fontWeight: "900" }}
                                >Analytics</p>
                            </div>
                            <div className='basis-[50%] h-full w-[70%] flex justify-center items-center flex-col gap-[10px]'>
                                <h3 className='tertiaryTitle giventitle2'
                                    style={{ color: "black" }}
                                >Portfolio & Real-Time Risk Tools</h3>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black" }}
                                >Our platform consolidates all client holdings to provide a single, real-time view of exposure, volatility, factor sensitivity, and stress scenarios. It's the cockpit your wealth deserves with the custom reporting that goes along.</p>
                            </div>
                            <img src={Analytics} className='h-[36%] absolute right-[0%] top-[2%]' alt="" />
                        </div>
                    </div>
                </section>
                <section className="panel shade flex justify-center items-center" ref={addToPanelsRef}>
                    <img src={ArrowDot2} className='absolute flip-horizontal-rotate top-[50%] left-[-10%] z-[2] h-[30%]' 
                    // style={{ transform: "rotate(55deg)" }}
                    alt="" />
                    <img src={ArrowDot3} className='absolute left-[33%] z-[2] h-[18%] top-[52%]'
                        style={{ transform: "rotate(25deg)" }}
                        alt="" />
                    <div className='h-full w-[90%] flex justify-end items-center flex-row relative gap-[20px]'>
                        <div className='basis-[44%] h-[39%] w-[40%] bg-[#FF6961] px-[40px] py-[40px] rounded-[12px] absolute top-[12%] left-[0%] flex justify-between items-start flex-col gap-[15px]'
                        >
                            <div className='basis-[15%] h-full w-[auto] px-[20px] flex justify-center items-center  rounded-3xl border-[2px] border-black'>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black", fontWeight: "900" }}
                                >Efficiency</p>
                            </div>
                            <div className='basis-[50%] h-full w-[70%] flex justify-center items-center flex-col gap-[10px]'>
                                <h3 className='tertiaryTitle text-left mr-[140px] giventitle2'
                                    style={{ color: "black" }}
                                >Capital Efficiency</h3>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black" }}
                                >Transparent, direct market access pricing—no opaque markup on FX, execution, or custody. For clients with appropriate profiles, we deploy portfolio margining, securities lending, or FX hedging—without needing a private bank.</p>
                            </div>
                            <img src={Cash} className='h-[58%] absolute right-[0%] bottom-[-7%]' alt="" />

                        </div>
                        <div className='basis-[48%] h-[50%] w-full rounded-[12px] flex justify-between items-start flex-col gap-[15px] px-[40px] py-[40px] relative'
                            style={{
                                background: "linear-gradient(23deg, rgba(0, 180, 200, 1) 50%, rgba(0, 220, 220, 1) 80%)"
                            }}
                        >

                            <div className='basis-[12%] h-full w-[25%] px-[20px]   flex justify-center items-center  rounded-3xl border-[2px] border-black'>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black", fontWeight: "900" }}
                                >Access</p>
                            </div>
                            <div className='basis-[50%] h-full w-[70%] flex justify-center items-center flex-col gap-[10px]'>
                                <h3 className='tertiaryTitle text-left mr-[190px] giventitle2'
                                    style={{ color: "black" }}
                                >Institutional Access</h3>
                                <p className='paragraph givenpara2'
                                    style={{ color: "black" }}
                                >We blend direct indexing, low-cost global ETFs, and access to 40,000+ mutual funds—including no-load and institutional share classes—at costs retail banks can't compete with.</p>
                            </div>
                            <img src={Globe} className='h-[60%] absolute right-[-3%] bottom-[-7%] mr-[10px]' alt="" />
                        </div>
                    </div>
                </section>
            </div>


        </div>
    );
};

export default HorizontalScroll;