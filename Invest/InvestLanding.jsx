import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import Bg1 from '../../assets/bg1.jpg';
import AutoCarousel from './AutoCarousel';
import './invest.css'

import Car1 from '../../assets/car1.png'
import Car2 from '../../assets/Car2.png'
import Car3 from '../../assets/Car3.png'
import Car4 from '../../assets/Car4.png'
import Car5 from '../../assets/Car5.png'

const InvestLanding = () => {
    // Refs and state logic remains the same
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
        // Items array remains the same
        { id: 2, title: "Active Management", content: "We manage risk and opportunity in real time, using data, judgment, and global market insight.", img: Car2 },
        { id: 3, title: "Backed by Technology", content: "We combine institutional-grade platforms with expert support to help you invest with confidence.", img: Car3 },
        { id: 4, title: "Disciplined Investing", content: "We keep you focused on what matters—helping you avoid costly emotional decisions like panic selling during market downturns or chasing the latest investment trends.", img: Car4 },
        { id: 5, title: "Built to Adapt", content: "Markets evolve. Life changes. We actively monitor and adjust your portfolio to navigate both, ensuring your investments remain aligned with shifting conditions and opportunities.", img: Car5 },
        { id: 6, title: "Portfolios Designed for You", content: "Your portfolio reflects your unique goals, risk tolerance, and life stage—not a generic model or market benchmark. Each strategy is individually tailored to fit your specific circumstances.", img: Car2 },
        { id: 1, title: "Precision-Guided Investing", content: "We customise portfolios to your goals, actively manage risk and opportunity, and support you with powerful technology for confident investing.", img: Car3 },
    ];

    const headingText = ""
    return (
        /* --- KEY CHANGES ---
         * 1. Replaced fixed heights with `min-h-screen h-auto` to ensure the container is
         * at least as tall as the screen but can grow.
         * 2. Added `py-16 md:py-24` for vertical spacing.
         */
        <div
            className='bg-black min-h-screen h-auto w-full flex justify-center items-center flex-col bg-center bg-cover bg-no-repeat py-16 md:py-24'
            style={{ backgroundImage: `url("${Bg1}")` }}
        >
            {/* --- KEY CHANGES ---
             * 1. Removed `basis-[20%]` and `h-full`. Let the content define the height.
             * 2. Changed `md:w-[70%]` to `md:w-[80%] lg:w-[70%]` for better desktop layout.
             * 3. Added `mb-12` for spacing between this and the carousel.
             */}
            <div className='w-[95%] md:w-[80%] lg:w-[70%] gap-[20px] flex justify-center md:justify-center items-center flex-col mb-12'>
                {/* Spotlight container commented out */}

                <h3 className='secondaryTitle text-white text-center mt-[30px] littleadjust'>Our Approach</h3>
                {/* <h4 className='tertiaryTitle my-[10px] text-white text-center'>Strategic investing, built around you</h4> */}
                <p className='paragraph text-center my-[10px]'>At Foinikas, we believe wealth management should be intentional, not passive. We combine institutional-grade technology with active portfolio management to help you grow and protect your wealth with purpose. Every strategy is carefully crafted around your unique goals, backed by rigorous research, and managed with meticulous care.</p>
            </div>

            {/* --- KEY CHANGES ---
             * 1. Removed `basis-[...]` and `h-full`.
             * 2. Changed `w-[90%]` to `w-full` on mobile to let the carousel take full width.
             * 3. Kept `md:w-[80%]` for desktop.
             */}
            <div className='w-full md:w-[80%] flex justify-center items-center flex-col'>
                <AutoCarousel items={items} count={3} />
            </div>
        </div>
    )
}

export default InvestLanding