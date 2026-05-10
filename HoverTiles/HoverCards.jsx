import React from 'react'
import './hoverCards.css'

const HoverCards = ({ src, title, subtitle, svg, text, points }) => {
  return (
    <div className='min-w-[70px] h-full flex items-center justify-center overflow-hidden relative hover-card'>

      <img src={src} alt={title || "Card background"} className='object-cover blend-image overlay' />

      <div className='h-[100px] w-[2px] bg-[#fff] absolute z-[3] top-[0] collapse-line'></div>

      <p className='absolute z-[3] text-white top-[115px] collapse-title text-center'>{title}</p>

      <div className='backdrop absolute z-[2] h-full w-full'></div>

      <div className='absolute z-[3] bottom-[20px] collapse-svg'>{svg}</div>

      {/* ALL padding = 5px */}
      <div className='absolute z-[3] expand-content w-[90%] bottom-[30px]
                      flex justify-center items-start flex-col
                      bg-[rgba(0,0,0,0.55)] backdrop-blur-[15px]
                      rounded-[12px] shadow-lg
                      gap-2 p-[13px]'>

        <h3 className='secondaryTitle text-white'>{title}</h3>

        <p className='text-white givenpara'>
          <span className='font-bold subtitle-text'>{subtitle[0]}</span> {text}
        </p>

        <ul className='pl-5 list-disc'>
          {points && points.map((element, index) => (
            <li key={index} className='text-white givenpara'>{element}</li>
          ))}
        </ul>

        <p className='font-bold text-white givenpara subtitle-text'>{subtitle[1]}</p>
      </div>

    </div>
  )
}

export default HoverCards
