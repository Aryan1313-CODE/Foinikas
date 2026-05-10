import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.68, -0.55, 0.265, 1.55], // easeOutBack style
    },
  },
}

const AnimatedCard = ({ children, className }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { triggerOnce: false })

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const IKBRLeft = () => {
  return (
    <div className='h-full w-[90%] flex justify-between items-center flex-col mt-[40px]'>
      {/* Card 1 */}
      <div className='basis-[24%] h-full w-full flex justify-start items-center'>
        <AnimatedCard className='card1 basis-[65%] flex justify-start items-center flex-col p-[20px] gap-[15px] h-[120%] w-full bg-[rgba(128,128,128,0.2)] shadow-lg backdrop-blur-[5px] rounded-[30px]'>
          <h3 className='tertiaryTitle text-white'>Global Reach & Market Access</h3>
          <p className='paragraph'>IBKR provides access to 135+ markets in 33 countries — enabling diversified global trading</p>
        </AnimatedCard>
      </div>

      {/* Card 2 */}
      <div className='basis-[24%] h-full w-full flex justify-end items-center relative'>
        <AnimatedCard className='card2 h-[130%] w-[65%] flex justify-start items-center flex-col p-[20px] gap-[15px] absolute top-[-35px] shadow-lg rounded-[30px] bg-[rgba(128,128,128,0.2)] backdrop-blur-[5px]'>
          <h3 className='tertiaryTitle text-white'>Institutional-Grade Technology</h3>
          <p className='paragraph'>Fast execution, real-time feeds, and robust APIs bring professional tools to your fingertips.</p>
        </AnimatedCard>
      </div>

      {/* Card 3 */}
      <div className='basis-[24%] h-full w-full flex justify-start items-center relative'>
        <AnimatedCard className='card3 h-[130%] w-[65%] flex justify-start items-center flex-col p-[20px] gap-[15px] absolute top-[-35px] z-[1] shadow-lg rounded-[30px] bg-[rgba(128,128,128,0.2)] backdrop-blur-[5px]'>
          <h3 className='tertiaryTitle text-white'>Security You Can Trust</h3>
          <p className='paragraph'>As a regulated broker, IBKR ensures top-tier encryption, compliance, and safety.</p>
        </AnimatedCard>
      </div>

      {/* Card 4 */}
      <div className='basis-[24%] h-full w-full flex justify-end items-center relative'>
        <AnimatedCard className='card4 h-[130%] w-[65%] absolute top-[-45px] z-[2] shadow-lg rounded-[30px] flex justify-start items-center flex-col p-[20px] gap-[15px] bg-[rgba(128,128,128,0.2)] backdrop-blur-[5px]'>
          <h3 className='tertiaryTitle text-white'>Low-Cost Investings</h3>
          <p className='paragraph'>Low fees, no hidden charges — aligned with our mission of accessible investing.</p>
        </AnimatedCard>
      </div>
    </div>
  )
}

export default IKBRLeft
