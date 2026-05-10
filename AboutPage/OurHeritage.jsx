import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Bg1 from '../../../assets/bg2Flip.jpg';
import Footer from '../../Footer/Footer';
import PartnerBottom from '../../Partners/PartnerBottom';
import AfBg2 from '../../../assets/afBg2.jpg';
import '../about.css';
import whatwedo from './Whatwedoimg.png';
const OurHeritage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.4 });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden'); // reset when out of view
    }
  }, [isInView, mainControls]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* FIX 1: Removed fixed heights (h-[700px], md:h-[170vh], heightadjust).
        Replaced with 'min-h-screen' and vertical padding 'py-16 md:py-24'.
        This fixes the footer overlap.
      */}
      <div
        ref={ref}
        className='min-h-screen w-full bg-cover bg-center flex justify-center gap-12 md:gap-24 items-center flex-col py-16 md:py-24'
        style={{ backgroundImage: `url("${Bg1}")` }}
      >
        {/* FIX 2: Removed layout classes (basis, mt, h-full).
          We let the component itself define its space.
          WARNING: This will likely still break your <PartnerBottom /> component,
          as its internal layout probably also depends on these.
        */}
        <motion.div
          className='w-[90%] flex justify-center items-center flex-row'
          variants={fadeInDown}
          initial='hidden'
          animate={mainControls}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Your <PartnerBottom /> component (from the image) goes here. */}
          <PartnerBottom />
        </motion.div>

        {/* FIX 3: Refactored this entire block to be responsive WITHOUT 'absolute' positioning
          or fixed parent heights.
        */}
        <div
          className='w-full flex justify-end items-center px-4 md:px-0' // Added padding for mobile
          
        >
          {/* CARD: Now a flex-container. Stacks on mobile (flex-col), side-by-side on desktop (md:flex-row).
            No longer needs 'h-full'.
          */}
          <div
            className='w-full md:w-[80%] lg:w-[70%] about-card rounded-[12px] flex flex-col md:flex-row relative overflow-hidden'
            style={{ boxShadow: '2px 2px 5px #000' }}
          >
            {/* IMAGE: Now a simple flex item. No longer 'absolute' or 'hidden'.
              Takes 45% width on desktop, 100% width on mobile.
            */}
            <div
              className='w-full md:w-[45%] h-[300px] md:h-auto bg-cover bg-center'
              style={{ backgroundImage: `url("${whatwedo}")` }}
            >
              <div className='h-full w-full bg-[rgba(0,0,0,0.3)]'></div>
            </div>

            {/* TEXT: The other flex item. Takes 55% width on desktop, 100% on mobile.
              No longer needs 'h-full' or 'basis'.
            */}
            <div className='w-full md:w-[55%] h-auto px-[25px] md:px-[50px] py-[30px] flex justify-center items-start gap-[20px] flex-col'>
              {/* FIX 4: Corrected invalid HTML (h2 outside p) */}
              <h2
                className='titleText mb-[20px]' // Note: mb-[20px] was on h2, not p
                style={{ fontFamily: 'Satoshi' }}
              >
                What we do
              </h2>
              <p className='paragraph'>
                We bring high-caliber investment management to more people by
                combining smart technology, global expertise, and human
                insight. Our adaptive, cost-efficient strategies are designed
                to grow with our clients — reflecting the realities of
                evolving lives, shifting markets, and changing goals.
                <br></br>
                <ul>
                  <li>
                    No cookie-cutter portfolios. Just thoughtful, personalized
                    solutions.
                  </li>
                  <li>
                    We handle the complexity so our clients can stay focused
                    on what matters most.
                  </li>
                  {/* Removed the debug note <li> */}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default OurHeritage;