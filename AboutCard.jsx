import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './about.css'; // Make sure this CSS file has your ac1, ac2, etc. gradient classes

// Word-by-word animation variant
const wordPopVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: 'spring', stiffness: 100 },
  }),
};

// Fade-in on scroll variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

// Split text into animated spans
const splitText = (text, controls) =>
  text.split(' ').map((word, i) => (
    <motion.span
      key={i}
      custom={i}
      initial="hidden"
      animate={controls}
      variants={wordPopVariant}
      className="inline-block mr-1" // Consider mr-1.5 or mr-2 for text-2xl
    >
      {word}
    </motion.span>
  ));

const AboutCard = ({ icon, title, desc, subText, image_url }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [bg, setBg] = useState('ac1');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  useEffect(() => {
    if (subText === 'Clarity over noise') {
      setBg('ac3');
    } else if (subText === 'Built for life') {
      setBg('ac3');
    } else if (subText === 'Efficiency that counts') {
      setBg('ac3');
    } else if (subText === 'Trust is everything' || subText === "Trust by design") {
      setBg('ac3');
    }
  }, [subText]);

  return (
    <div
      // The parent wrapper div that receives the height from HomeAbout.js
      // No changes here, just ensuring it acts as the height constraint
      className={`h-full w-full rounded-[20px] flex justify-center items-center ${bg}`}
      ref={ref}
    >
      <div
        // This inner div acts as a flex container to arrange its children vertically.
        // `h-full` ensures it takes the height of its parent (the card wrapper).
        className='h-[95%] w-[95%] p-5 ac-hover flex flex-col justify-start items-start gap-3 px-[25px] bg-[rgba(0,0,0,0.2)] backdrop-blur-[3px] rounded-[12px]'
        style={{ boxShadow: '2px 2px 5px #000' }}
      >
        {/* Icon: Fixed size, will not shrink */}
        <div className='w-14 h-14 text-white flex items-center justify-center flex-shrink-0'>
          {icon}
        </div>

        {/* Subtext (Heading): Larger font, will not shrink */}
        <h5 className='font-black text-white text-2xl flex-shrink-0'>
          {splitText(subText, controls)}
        </h5>

        {/* --- CRUCIAL CHANGE FOR SCROLLABLE DESCRIPTION --- */}
        {/* This div will:
            1. `flex-1`: Grow to fill all available vertical space in the parent (`h-[95%] w-[95%] p-5...`).
            2. `overflow-y-auto`: Show a vertical scrollbar if its content (`<motion.p>`) overflows.
            3. `w-full pr-2`: Ensure it takes full width and adds right padding for scrollbar space.
        */}
        <div className="flex-1 overflow-y-auto w-full pr-2">
          <motion.p
            // Description Paragraph: Readable font, breaks words to prevent horizontal overflow
            className='font-normal text-white text-base break-words'
            variants={fadeInUp}
            initial='hidden'
            animate={controls}
          >
            {desc}
          </motion.p>
        </div>

        {/* The line at the bottom: Will not shrink */}
        <motion.div
          className='w-full h-[2px] bg-white flex-shrink-0'
          variants={fadeInUp}
          initial='hidden'
          animate={controls}
        />
      </div>
    </div>
  );
};

export default AboutCard;