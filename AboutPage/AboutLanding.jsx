import React, { useState, useRef } from 'react';
import BG from '../../../assets/bg1.jpg';
import HeroImg from '../../../assets/aboutBg.webp';
import '../about.css';

const AboutLanding = ({ scroll }) => {
  const [hovering, setHovering] = useState(false);
  const textRef = useRef(null);
  const [coords, setCoords] = useState({ x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x: `${x}px`, y: `${y}px` });
  };

  return (
    <div className='h-[100vh] w-full flex justify-between items-center flex-col bg-cover'
      style={{ backgroundImage: `url("${BG}")` }}
    >
      <div className='h-full w-full bg-cover bg-center'
        style={{ backgroundImage: `url("${HeroImg}")` }}
      >
        <div className='h-full w-full bg-[rgba(0,0,0,0.3)] flex justify-start items-end md:items-center pl-[10%]'>
          <div className='h-[50%] w-[85%] md:w-[40%]'>
            <h1
              className={` secondaryTitle text-[2rem] md:text-[3.3rem] font-[900] md:mt-[65px] text-white spotlight-text-about ${hovering ? 'hovering' : ''}`}
              data-text="Expertly managed investment strategies tailored to your unique financial journey"
              ref={textRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{ fontFamily: "Crimson Pro", '--x': coords.x, '--y': coords.y }}
            >
              Expertly managed investment strategies tailored to your unique financial journey
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLanding;
