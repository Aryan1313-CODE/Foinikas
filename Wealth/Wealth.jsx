import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Bg1 from '../../assets/main12.jpg';
import Tablet3 from '../../assets/tablet6.png';
import IBKRLogo from '../../assets/IBKRNewLogo.png';
import ApexLogo from '../../assets/ApexLogo.png';
import './wealth.css';
import logo from './Screenshot 2025-11-02 140821-modified (1).png'
import logo2 from './Screenshot 2025-11-02 142327-modified.png'

const AnimatedHeading = ({ text, className, controls }) => {
    const headingContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.35 } },
    };
    const wordVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
    };
    return (
        <motion.div variants={headingContainer} initial="hidden" animate={controls} className={className}>
            {text.split(' ').map((word, index) => (
                <motion.span key={index} variants={wordVariant} className="inline-block mr-[1vw]">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

const Wealth = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.4,
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls]);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <div
            className='w-[100%] min-h-screen bg-black bg-cover bg-no-repeat bg-center flex justify-center items-center py-[5vw] px-[4vw] mt-[-50vh] gapadjust'
            style={{ backgroundImage: `url("${Bg1}")` }}
        >
            <div 
                ref={ref}
                className='w-[100%] max-w-[90%] flex justify-center items-center flex-col md:flex-row gap-[3vw]'
            >
                {/* DESKTOP VIEW */}
                <div className='w-[100%] hidden md:flex justify-between items-center gap-[3vw]'>

                    {/* Left Card */}
                    <div className='flex-[0.35] relative h-[600px] w-[100%]'>
                        <div className='absolute inset-0 rounded-[3vw]' style={{ background: "linear-gradient(180deg, rgba(156, 75, 121, 0.68) 0%, rgba(211, 165, 189, 0.8) 100%)" }}>
                            {/* <svg width="282" height="251" viewBox="0 0 282 251" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute mt-[2vw] ml-[1vw] w-[75%] max-w-[282px]'>
                                {logo}
                            </svg> */}
                            <img src={logo} alt="" className="absolute top-4 left-4 h-[20%] w-[40%]" />
                            <img src={Tablet3} alt="Tablet" className='absolute bottom-[-60px] left-[10vw] rounded-[1.5vw] h-[400px] z-[2]' style={{ filter: "drop-shadow(5px 5px 25px #000)" }} />
                            <img src={logo2} className="absolute bottom-4 right-4 h-[20%] w-[40%] z-[1]" alt="" />
                        </div>
                    </div>

                    {/* Right Content */}
                    <motion.div
      initial="hidden"
      animate={controls}
      variants={fadeUp}
      className="flex-[0.55] flex flex-col justify-center items-center gap-[2vw]"
    >
      {/* Heading */}
      <AnimatedHeading
        text="Wealth Management for Next Generation Investors"
        className="text-[5vw] lg:text-[3vw] 2xl:text-[2vw] font-bold text-white text-center"
        controls={controls}
      />

      {/* Subtitle */}
      <motion.p
        variants={fadeUp}
        className="text-[1.5vw] lg:text-[1.2vw]  text-white text-center max-w-[80%]"
        style={{ fontFamily: "Satoshi" }}
      >
        Built on the world's most trusted trading infrastructure. Your portfolio
        deserves the same tools used by top institutions.
      </motion.p>

      {/* Partners Card */}
      <motion.div
  variants={fadeUp}
  className="relative w-full max-w-[50vw] mt-[2vw] py-[2vw] px-[2vw] rounded-[1vw] 
             bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] flex flex-col items-center"
  style={{ boxShadow: "2px 2px 15px #000" }}
>
  {/* Title */}
  <h5 className="tertiaryTitle text-white text-center mb-4">OUR PARTNERS</h5>

  {/* Logos row */}
  <div className="flex flex-row justify-center items-center gap-6 w-full">
    <div
      className="basis-1/2 h-[8vw] 2xl:h-[5vw] bg-contain bg-center bg-no-repeat rounded-[12px]"
      style={{ backgroundImage: `url("${IBKRLogo}")` }}
    ></div>
    <div
      className="basis-1/2 h-[8vw] 2xl:h-[5vw] bg-contain bg-center bg-no-repeat rounded-[12px]"
      style={{ backgroundImage: `url("${ApexLogo}")` }}
    ></div>
  </div>
</motion.div>

    </motion.div>
                </div>

                {/* MOBILE VIEW */}
                <div className='w-[100%] flex flex-col items-center md:hidden gap-[5vw] heightformobile2'>
                    <AnimatedHeading text="Wealth Management for Next Generation Investors" className="text-[6vw] sm:text-[5vw] font-bold text-white text-center" controls={controls} />
                    <motion.p variants={fadeUp} initial='hidden' animate={controls} className='text-[3vw] sm:text-[2vw] text-white text-center' style={{ fontFamily: "Satoshi" }}>
                        Built on the world's most trusted trading infrastructure. Your portfolio deserves the same tools used by top institutions.
                    </motion.p>
                    <motion.div
  variants={fadeUp}
  className="relative w-full max-w-[50vw] mt-[2vw] py-[2vw] px-[2vw] rounded-[1vw] 
             bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] flex flex-col items-center"
  style={{ boxShadow: "2px 2px 15px #000" }}
>
  {/* Title */}
  <h5 className="tertiaryTitle text-white text-center mb-4">OUR PARTNERS</h5>

  {/* Logos row */}
  <div className="flex flex-row justify-center items-center gap-6 w-full">
    <div
      className="basis-1/2 h-[12vw] bg-contain bg-center bg-no-repeat rounded-[12px]"
      style={{ backgroundImage: `url("${IBKRLogo}")` }}
    ></div>
    <div
      className="basis-1/2 h-[12vw] bg-contain bg-center bg-no-repeat rounded-[12px]"
      style={{ backgroundImage: `url("${ApexLogo}")` }}
    ></div>
  </div>
</motion.div>

                </div>
            </div>
        </div>
    );
};

export default Wealth;
