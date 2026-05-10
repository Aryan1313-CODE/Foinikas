import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

import Bg1 from '../../assets/bg1.jpg'
import IKBRLogo from '../../assets/ikbrLogo.png'
import IKBRImg from '../../assets/ikbrImg.png'
import IKBRLeft from './IKBRLeft'

const wordVariant = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2, // slower delay between words
        duration: 0.5,
        ease: [0.175, 0.885, 0.32, 1.275], // easeOutBack-like springy feel
      },
    }),
  }

const IBKRLanding = () => {
  const headingRef = useRef(null)
  const isInView = useInView(headingRef, { margin: '-100px' })
  const controls = useAnimation()

  const heading = 'Why We Partner with IBKR?'
  const subheading = 'Trusted, Secure, and Built for Growth.'

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  return (
    <div
      className='h-[100vh] bg-black w-full flex justify-center items-center bg-cover bg-no-repeat bg-center'
      style={{ backgroundImage: `url("${Bg1}")` }}
    >
      <div className='h-[80%] w-[90%] flex justify-start items-center flex-col gap-[20px]'>
        {/* 👇 Only this section gets the ref */}
        <div
          ref={headingRef}
          className='basis-[20%] h-full w-full flex justify-center items-center flex-col'
        >
          <h2 className='titleText flex flex-wrap justify-center'>
            {heading.split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate={controls}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h2>
          <h4 className='tertiaryTitle text-white flex flex-wrap justify-center mt-2'>
            {subheading.split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariant}
                initial="hidden"
                animate={controls}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h4>
        </div>

        <div className='basis-[70%] h-full w-full flex justify-between items-center flex-row'>
          <div className='basis-[60%] h-full w-full flex justify-center items-center'>
            <IKBRLeft />
          </div>
          <div className='basis-[30%] flex justify-evenly items-center flex-col h-full w-full rounded-[12px] bg-[rgba(128,128,128,0.2)] shadow-lg backdrop-blur-[5px]'>
            <div
              className='basis-[50%] h-full w-[90%] bg-cover bg-top bg-no-repeat rounded-[8px]'
              style={{ backgroundImage: `url("${IKBRLogo}")` }}
            ></div>
            <div
              className='basis-[40%] h-full w-[90%] bg-cover bg-center bg-no-repeat rounded-[8px]'
              style={{ backgroundImage: `url("${IKBRImg}")` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IBKRLanding
