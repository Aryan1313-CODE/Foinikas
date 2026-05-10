import React, { useState, useEffect } from 'react'
import Lottie from 'lottie-react'
import loaderAnimation from '../../assets/Animation - 1745604001950.json'

const phrases = [
  'Investing in your future...',
  'Building financial freedom...',
  'Optimizing your wealth...',
]

const Loading = ({ isVisible }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
        setFade(true)
      }, 300)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`fixed  top-0 left-0 w-screen h-screen z-50 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-125 pointer-events-none'
      }`} style={{
        background: 'radial-gradient(circle, #66023C 0%, #000000 100%)',
      }}
    >
      <div className="">
        <Lottie animationData={loaderAnimation} loop={true} />
      </div>
      <h2
        className={`text-[28px] font-[500] mt-4 text-white transition-opacity duration-300 absolute z-[9] top-[65%] ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {phrases[currentPhraseIndex]}
      </h2>
    </div>
  )
}

export default Loading
