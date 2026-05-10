import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FeatureLeft = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <>
      <motion.div
        className='h-full w-full hidden md:flex items-center md:items-center justify-evenly flex-col'
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }} // 👈 Re-trigger on every view
      >
        <motion.h2 className='secondaryTitle text-white' variants={fadeUp}>
          Why Foinikas?
        </motion.h2>

        <motion.p className='paragraph text-center md:text-left' variants={fadeUp}>
          We believe that actively managing our clients' assets is the most responsible approach to investing because it addresses the real-life complexities of managing your money. Our strategies integrate scientifically validated elements of active management to provide you with a smarter, more adaptive strategies. This means that your portfolio evolves with your life goals and risk appetite, not just market trends.
        </motion.p>

        <motion.div variants={fadeUp} className='flex justify-center items-center gap-[25px]'>
          <Link to={"/login"} state={{ current: "signup" }} className='secondary-btn flex justify-center items-center'>
            Get Started
          </Link>
          <Link to={"/about-us"} className='secondary-btn flex justify-center items-center'>
            Learn More
          </Link>

        </motion.div>
      </motion.div>
      <div
        className='h-full w-full md:hidden flex items-center md:items-start justify-evenly flex-col'
      >
        <h2 className='secondaryTitle text-white'
        style={{fontFamily:"Satoshi"}}
        >
          Why Foinikas?
        </h2>

        <p className='paragraph text-center md:text-left'>
          We believe that actively managing our clients' assets is the most responsible approach to investing because it addresses the real-life complexities of managing your money. Our strategies integrate scientifically validated elements of active management to provide you with a smarter, more adaptive strategies. This means that your portfolio evolves with your life goals and risk appetite, not just market trends.
        </p>

        <div className='flex justify-center items-center gap-[25px]'>
          <Link to={"/login"} state={{ current: "signup" }} className='secondary-btn flex justify-center items-center'>
            Get Started
          </Link>
          <Link to={"/about-us"} className='secondary-btn flex justify-center items-center'>
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeatureLeft;
