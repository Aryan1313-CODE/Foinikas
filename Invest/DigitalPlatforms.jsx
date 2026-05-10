import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';
import Bg1 from '../../assets/bg2Flip.jpg';
import AutoCarousel from './AutoCarousel';
import './invest.css'
import DigitalCarousel from './DigitalCarousel';

const DigitalPlatforms = () => {
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
        { id: 1, title: "Precision Allocation with Fractional Shares", content: "We invest in fractional shares to fine-tune portfolio allocations, allowing every euro to be deployed with surgical precision—especially valuable in thematic, diversified or ESG strategies.", color: "#f6d465" },
        { id: 2, title: "Tailored Risk Mitigation", content: "We structure client-specific hedging strategies using options, structured notes, and overlays—designed to protect against equity drawdowns, interest rate shocks, or FX risk.", color: "linear-gradient(23deg, rgba(0, 157, 157, 1) 54%, rgba(0, 180, 180, 1) 67%)" },
        { id: 3, title: "Algorithmic & Smart Order Execution", content: "We use IBKR's SmartRouting and algorithmic execution engine to reduce slippage, improve pricing, and maintain market neutrality during rebalancing—maximizing performance over time.", color: "linear-gradient(23deg, rgba(173, 232, 244, 1) 40%, rgba(130, 201, 239, 1) 75%)" },
        { id: 4, title: "Portfolio Aggregation & Real-Time Risk Tools", content: "Our platform consolidates all client holdings—including external assets—to provide a single, real-time view of exposure, volatility, factor sensitivity, and stress scenarios. It's the cockpit your wealth deserves.", color: "#FFF5EE" },
        { id: 5, title: "Dynamic Yield Enhancement", content: "We tap global fixed income markets, money market funds, and short-duration credit for better cash utilization. We also apply options overlays for those seeking enhanced income potential from equity exposure.", color: "#E0B0FF" },
        { id: 6, title: "Capital Efficiency & Liquidity Access", content: "Through IBKR's margin engine, clients with appropriate profiles can deploy portfolio margining, securities lending, or FX hedging—without needing a private bank.", color: "#FF6961" },
        { id: 5, title: "Institutional Access, Retail Flexibility", content: "We blend direct indexing, low-cost global ETFs, and access to 40,000+ mutual funds—including no-load and institutional share classes—at costs retail banks can't compete with.", color: "linear-gradient(23deg, rgba(0, 180, 200, 1) 50%, rgba(0, 220, 220, 1) 80%)" },

    ];
    return (
        <div
            className='bg-black h-[700px] md:h-[135vh] w-full md:hidden flex justify-end items-center flex-col bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url("${Bg1}")` }}
        >
            <div className='basis-[50%] h-full w-[90%] md:w-[60%] flex justify-center items-center flex-col'>
                <div className='w-auto h-auto spotlight-container md:flex md:justify-center md:items-center leading-[normal]'>
                    <h1 className={`text-[3rem] md:text-[5rem] text-white font-[900] text-center spotlight-text ${hovering ? 'hovering' : ''}`}
                        data-text="Digital Platform"
                        ref={textRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        style={{ fontFamily: "Crimson", '--x': coords.x, '--y': coords.y }}
                    >Digital Platform</h1>
                </div>
                <h3 className='secondaryTitle text-white text-center'>How Foinikas Creates Value</h3>
                <h4 className='paragraph my-[10px] text-white text-center md:hidden block'>Built on infrastructure designed for the world's most demanding investors</h4>
                {/* <p className='paragraph text-center my-[10px]'>At Foinikas, we combine institutional-grade technology with active portfolio management to help you grow and protect wealth—intentionally, not passively. Every strategy is shaped by your goals, guided by research, and managed with care.</p> */}
                {/* <Link to={"/book"} className='home-btn flex justify-center items-center my-[10px]'>Start Investing Today</Link> */}
            </div>
            <div className='basis-[50%] h-full w-[95%] md:w-[80%]'>
                <DigitalCarousel items={items} count={4} />
            </div>
        </div>
    )
}

export default DigitalPlatforms
