import React, { useEffect, useRef } from 'react';
import './features.css';
import Bg from '../../assets/main4.png'
import Bg1 from '../../assets/bg2Flip.jpg'
import FeatureLeft from './FeatureLeft';

const OurFeatures = () => {
    const scrollAnchorRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollAnchorRef.current) return;

            const distance = window.innerHeight / 3; // Reduced from 3 to 5
            const topVal = scrollAnchorRef.current.getBoundingClientRect().top;
            let index = -1 * (topVal / distance);
            index = Math.floor(index);

            cardRefs.current.forEach((card, i) => {
                if (!card) return;

                card.classList.remove("away", "current");

                if (i < index) {
                    card.classList.add("away");
                    card.style.transform = `rotate(-${i * 10}deg) translateY(-200%)`;
                } else if (i === index) {
                    card.classList.add("current");
                    card.style.transform = `rotate(0deg) translateY(0)`;
                } else {
                    card.style.transform = `rotate(-${i * 10}deg) translateY(0)`;
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const cardContent = [{title: "Long-Term Thinking", content: "We invest against qualitative long-term secular growth themes rather than quarterly results – your portfolio grows with the future, not the headlines."},
                         {title: "Alpha Potential Through Global Access", content: "We tap into skilled active strategies and maintain value-discipline across public and private markets globally, broadening opportunity and boosting return potential."},
                         {title: "Dynamic Allocation", content: "We actively monitor and adjust risk exposures in response to real-world economic changes to build resilient, expert portfolios."},
                         {title: "Transparent & Low Fees", content: "We keep the total cost drag low by elimination of unnecessary layers and hidden charges."},
                         {title: "Innovation", content: "We leverage advanced trading technology, state of the art security and institutional-grade tools to uncover trading opportunities and to keep portfolios aligned with the forces shaping the future"},
    ]

    return (
        <div className='h-[500px] md:h-[220vh] w-full mx-auto bg-black' >
            {/* Scroll anchor to calculate top offset */}
            <div ref={scrollAnchorRef} ></div>

            <div className='w-full h-full md:h-[120vh] flex justify-center items-center flex-row sticky top-0 stack-area overflow-hidden bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url("${Bg1}")`}}>
                <div className='w-[90%] h-full flex justify-start md:justify-center items-center flex-col md:flex-row'>
                    <div className='basis-[80%] md:basis-[50%] md:h-[45%] w-[95%] littlemargin'>
                        <FeatureLeft/>
                    </div>
                    <div className='basis-[50%] h-[95%] w-[95%] relative hidden md:block '>
                        {["linearGradient(to_right,_rgb(0,84,127),_rgb(0,110,150)", "#9932CC", "#8B008B", "#620035"].reverse().map((color, i) => (
                            <div
                                key={i}
                                ref={el => (cardRefs.current[i] = el)}
                                className={`fcard c${i + 1}  rounded-[25px] absolute z-[${4 - i}] transition-transform duration-500 ease-in-out flex justify-center gap-[50px] items-start flex-col p-[50px] customcard`}
                                style={{
                                    
                                    transform: `rotate(-${i * 10}deg)`,
                                    zIndex: 4 - i // Set zIndex directly
                                }}
                            >
                                <h4 className='tertiaryTitle text-white'
                                style={{fontSize:"2rem"}}
                                >{cardContent[i].title}</h4>
                                <p className='paragraph'>{cardContent[i].content}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OurFeatures;



// const customOffsets = [0, -675, -700, -725, -750]; 