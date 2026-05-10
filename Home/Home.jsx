import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Bg1 from '../../assets/bg1.jpg';
import HCard1 from '../../assets/trust1.png'
import HCard2 from '../../assets/trust2.png'
import HCard3 from '../../assets/trust3.png'
import HCard4 from '../../assets/trust4.png'
import HCard5 from '../../assets/trust5.png'
import './home.css'
import TrustMarkers from './TrustMarkers';

const Home = () => {
  const headingRef = useRef([]);
  const buttonRef = useRef(null);
  const button2Ref = useRef(null);
  const textRef = useRef(null)
  const [coords, setCoords] = useState({ x: '50%', y: '50%' });
  const [hovering, setHovering] = useState(false);

  const homeRef = useRef(null);
  const movingTitleRef = useRef(null);

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  headingRef.current = [];

  const addToRefs = (el) => {
    if (el && !headingRef.current.includes(el)) {
      headingRef.current.push(el);
    }
  };

  const handleMouseMove = (e) => {
    const rect = textRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x: `${x}px`, y: `${y}px` });
  };

  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: homeRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
      }
    });

    const width = window.innerWidth;

    if (width >= 768 && width <= 1288) {
      // Animate title
      tl.to(movingTitleRef.current, {
        x: -0.19 * width,
        y: 0.15 * screenHeight,
        ease: 'power2.out',
      }, 0);

      // Animate the paragraph text margin
      tl.to(
        homeRef.current.querySelector("p"), // target the main paragraph
        {
          marginLeft: 5,
          marginRight: 20,
          ease: "power2.out",
        },
        0.2 // start slightly after the title begins moving
      );
    } else {
      // Default animation for larger screens
      tl.to(movingTitleRef.current, {
        x: -0.20 * width,
        y: 0.18 * screenHeight,
        ease: 'power2.out',
      }, 0);
    }

    // Animate TrustMarkers fade-in
    tl.to('.trust-marker-container', {
      opacity: 1,
      display: "flex",
      ease: 'power1.out',
    }, 0.4);

  }, homeRef);

  return () => ctx.revert();
}, []);








  const headingText = 'Your Life, well-invested';

  return (
    <>
      <div className='h-[1500px] w-full md:hidden flex justify-center items-center flex-col heightformobile'
        style={{ backgroundImage: `url("${Bg1}")` }}
      >
        <div className='md:hidden basis-[10%] md:basis-[37%] h-full w-full flex justify-end items-center flex-col gap-[20px]'>
          <div className='h-[175px] w-auto md:w-[950px] mt-[100px] spotlight-container md:flex md:justify-center md:items-center  relative top-[20%]'>
            <h1
              className='md:hidden block text-[2rem] md:text-[3.2rem] font-[700] px-[10px] md:px-[0] text-center leading-[normal] text-white hero-text'
              style={{ textShadow: '2px 2px 5px #000' }}
            >
              {headingText.split(' ').map((word, i) => (
                <span
                  key={i}
                  ref={addToRefs}
                  className='inline-block mx-[6px] word-spotlight' // Adding a new class for spotlight effect
                  style={{ display: 'inline-block' }}
                >
                  {word}
                </span>
              ))}
            </h1>

            <h1
              className={`spotlight-text ${hovering ? 'hovering' : ''} md:inline-block hidden  md:text-[3.2rem] font-[700] px-[10px] md:px-[0] text-center leading-[normal] text-white hero-text 2xl:text-[2rem]`}
              data-text="Your Life, well-invested"
              ref={textRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              style={{ '--x': coords.x, '--y': coords.y }}
            >
              Your Life, well-invested
            </h1>
          </div>

          <div className='h-[50px] w-auto md:w-[600px] relative bottom-[10px]'>
            <p className='text-center text-white text-[1rem] md:text-[1.2rem] 2xl:text-[2rem] font-[500] px-[15px] mt-[0] md:mt-[50px] md:px-[0]'>
              Foinikas helps your wealth grow at every stage of life
            </p>
          </div>

          <div className='h-auto md:h-[75px] w-auto md:w-[800px] flex justify-around items-center flex-row relative'>
            <div className='basis-[40%] w-[100%] h-auto md:h-[80%] flex justify-center gap-[30px] items-center flex-col md:flex-row'>
              <Link ref={buttonRef} to={'/login'} state={{ current: "signup" }} className=' home-btn   flex justify-center items-center'>
                Get Started
              </Link>
              <Link ref={button2Ref} to={'/invest'} className='home-btn flex justify-center items-center'>
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className='md:hidden basis-[85%] md:basis-[45%] mt-[40px] md:mt-[0] h-full w-[90%] flex justify-between items-center flex-col md:flex-row gap-[20px]'>
          <div className='basis-[20%] h-card   h-[60%] w-full rounded-[6px] overflow-hidden bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px]  bg-cover bg-center'
            style={{
              background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)",
              boxShadow: "2px 2px 50px rgba(255,255,255,0.2)"
            }}
          >
            <div className='h-full w-full bg-[rgba(0,0,0,0.0)] px-[20px] py-[20px] flex justify-end items-start flex-col heightbyme'
            // style={{background:"linear-gradient(to bottom, rgab(0,0,0,0))"}}
            >
              <h2 className='titleText'>+160</h2>
              <p className='paragraph text-left md:mb-[30px]'>Investable markets for globally diversified, resilient portfolios</p>
            </div>

          </div>
          <div className='basis-[20%] h-card   h-[60%] w-full rounded-[6px] overflow-hidden bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px]  bg-cover bg-center'
            style={{
              background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)",
              boxShadow: "2px 2px 50px rgba(255,255,255,0.2)"
            }}
          >
            <div className='h-full w-full bg-[rgba(0,0,0,0.0)] px-[20px] py-[20px] flex justify-end items-start flex-col '>
              <h2 className='titleText'>+100</h2>
              <p className='paragraph text-left md:mb-[15px]'>Asset classes and return sources to unlock performance potential</p>
            </div>

          </div>
          <div className='basis-[20%] h-card   h-[60%] w-full rounded-[6px] overflow-hidden bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px]  bg-cover bg-center z-1000'
            style={{
              background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)",
              boxShadow: "2px 2px 50px rgba(255,255,255,0.2)"
            }}
          >
            <div className='h-full w-full bg-[rgba(0,0,0,0.0)] px-[20px] py-[20px] flex justify-end items-start flex-col '>
              <h2 className='titleText'>+43k</h2>
              <p className='paragraph text-left md:mb-[15px]'>Instruments available to diversify portfolios with institutional breadth</p>
            </div>

          </div>
          <div className='basis-[20%] h-card   h-[60%] w-full rounded-[6px] overflow-hidden bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px]  bg-cover bg-top md:bg-center z-1000'
            style={{
              background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)",
              boxShadow: "2px 2px 50px rgba(255,255,255,0.2)"
            }}
          >
            <div className='h-full w-full bg-[rgba(0,0,0,0.0)] px-[20px] py-[20px] flex justify-end items-start flex-col '>
              <h2 className='titleText'>99.9%</h2>
              <p className='paragraph text-left md:mb-[15px]'>Platform uptime—built for stability, even in extreme market conditions</p>
            </div>

          </div>
          <div className='basis-[20%] h-card   h-[60%] w-full rounded-[6px] overflow-hidden bg-[rgba(255,255,255,0.2)] backdrop-blur-[5px]  bg-cover bg-center z-1000'
            style={{
              background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)",
              boxShadow: "2px 2px 50px rgba(255,255,255,0.2)"
            }}
          >
            <div className='h-full w-full bg-[rgba(0,0,0,0.0)] px-[20px] py-[20px] flex justify-end items-start flex-col'>
              <h2 className='titleText'>−98%</h2>
              <p className='paragraph text-left'>Execution slippage reduced by up to 98%<sup>1</sup> vs traditional banks—preserving more of your portfolio's value</p>
            </div>

          </div>
        </div>
      </div>


      <div
        ref={homeRef}
        className='home-wrapper h-[1300px] md:h-[150vh] w-full overflow-hidden md:block hidden'
      >
        <div
          className=' sticky top-0 h-screen w-full flex justify-start items-center flex-col bg-center bg-cover bg-no-repeat'
          style={{ backgroundImage: `url("${Bg1}")` }}
        >


          {/* Home COmponent for Desktop */}
          <div className='w-[90%] h-[150vh] hidden md:flex justify-between items-end flex-row'>
            <div
              ref={movingTitleRef}
              className='basis-[55%] h-[90%] w-full flex justify-center items-center gap-[25px] flex-col moving-title relative top-[-20%] left-[22%]'
            >
              <div className=' h-auto spotlighth-container hidden md:inline-block md:flex md:justify-center md:items-center leading-[normal]'>
                    <h1 className={` text-white font-[900] mt-[100px] text-center spotlight-texth ${hovering ? 'hovering' : ''}`}
                        data-text="Your life, well invested"
                        ref={textRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        style={{ fontFamily: "Crimson Pro", '--x': coords.x, '--y': coords.y }}
                    >Your life, well invested</h1>
                </div>

              <div className='h-[80px] w-auto md:w-full relative bottom-[45px]'>
                <p className='text-center text-white text-[1rem] md:text-[1.3rem] font-[500] px-[15px] mt-[0] md:mt-[50px] md:px-[0]'
                style={{fontFamily: "Satoshi"}}
                >
                  Professionally managed investment portfolios, tailored to life, powered by the best trading technology— so you can invest your time where it matters most
                </p>
              </div>

              <div className='h-auto md:h-[75px] w-auto md:w-[full] flex justify-around items-center flex-row relative'>
                <div className='basis-[40%] w-[100%] h-auto md:h-[80%] flex justify-center gap-[30px] items-center flex-col md:flex-row mt-[50px] button-container'>
                  <Link ref={buttonRef} to={'/login'} state={{ current: "signup" }} className=' secondary-btn   flex justify-center items-center'>
                    Get Started
                  </Link>
                  <Link ref={button2Ref} to={'/invest'} className='secondary-btn flex justify-center items-center'>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className='basis-[45%] h-[90%] w-full hidden justify-center items-center trust-marker-container opacity-0 '>
              <TrustMarkers />
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Home;
