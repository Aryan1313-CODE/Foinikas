import React, { useRef, useEffect } from 'react';
import Bg from '../../../assets/main12.jpg';
import { motion, useInView } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const SmartTech = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const { hash } = useLocation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };



  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);


  return (
    <motion.div
      ref={ref}
      id='smartTech'
      className='h-[1500px] md:h-[100vh] w-full bg-cover bg-center flex justify-center gap-[30px] items-center flex-col'
      style={{ backgroundImage: `url("${Bg}")` }}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >

      <div className='h-[80%] w-[90%] flex justify-between items-center flex-col bg-[rgba(255,255,255,0.1)] py-[30px] px-[50px] rounded-[12px]' style={{ boxShadow: "5px 5px 15px #000" }}>
        <div className='basis-[30%] h-full w-full flex justify-between items-center flex-col gap-[20px] md:gap-[0] md:flex-row'>
          <div className='basis-[50%] h-full w-full flex justify-center items-center'>
            <h2 className='titleText text-center md:text-left'>Technology-Driven Wealth Management</h2>
          </div>
          <div className='basis-[45%] h-full w-full flex justify-center items-center text-white'>
            <p className='text-center md:text-left'>Through our partnership with Interactive Brokers, we offer the same powerful infrastructure used by institutional investors—now tailored for your long-term goals. Our tech-forward approach integrates directly with IBKR’s real-time data, trading tools, and portfolio analysis engine.
            </p>
          </div>
        </div>
        <div className='basis-[65%] h-full w-full hidden md:flex justify-between items-center flex-row'>
          <div className='basis-[32%] h-full w-full flex justify-between items-center flex-col'>
            <div className='basis-[48%] h-full w-full  flex items-center text-right'>
              <p className='text-[1.3rem] font-[700] text-white'>#1 Prime Broker for Hedge Funds with AUM &lt; $50 million</p>
            </div>
            <div className='basis-[48%] h-full w-full flex justify-center flex-col gap-[10px]'>
              <p className='text-[1.3rem] font-[700] text-white text-right'>Cost Efficiency</p>
              <p className='paragraph text-right'>No custody fees, ultra-low commissions, and minimized hidden execution costs significantly reduce fee drag over time—keeping more of your capital invested and compounding</p>
            </div>
          </div>
          <div className='basis-[32%] h-full w-full flex justify-center items-center relative'>
            <svg width="396" height="246" viewBox="0 0 396 246" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 14C0 16.2091 1.79086 18 4 18C6.20914 18 8 16.2091 8 14C8 11.7909 6.20914 10 4 10C1.79086 10 0 11.7909 0 14ZM4 14.75H112V13.25H4V14.75ZM131.25 34V41H132.75V34H131.25ZM112 14.75C122.631 14.75 131.25 23.3685 131.25 34H132.75C132.75 22.5401 123.46 13.25 112 13.25V14.75Z" fill="white" />
              <path d="M396 14C396 16.2091 394.209 18 392 18C389.791 18 388 16.2091 388 14C388 11.7909 389.791 10 392 10C394.209 10 396 11.7909 396 14ZM392 14.75H285V13.25H392V14.75ZM265.75 34V41H264.25V34H265.75ZM285 14.75C274.369 14.75 265.75 23.3685 265.75 34H264.25C264.25 22.5401 273.54 13.25 285 13.25V14.75Z" fill="white" />
              <path d="M395 236C395 233.791 393.209 232 391 232C388.791 232 387 233.791 387 236C387 238.209 388.791 240 391 240C393.209 240 395 238.209 395 236ZM391 235.25L284 235.25L284 236.75L391 236.75L391 235.25ZM264.75 216L264.75 209L263.25 209L263.25 216L264.75 216ZM284 235.25C273.369 235.25 264.75 226.631 264.75 216L263.25 216C263.25 227.46 272.54 236.75 284 236.75L284 235.25Z" fill="white" />
              <path d="M0 236C1.92499e-07 233.791 1.79086 232 4 232C6.20914 232 8 233.791 8 236C8 238.209 6.20914 240 4 240C1.79086 240 -1.92499e-07 238.209 0 236ZM4 235.25L111 235.25L111 236.75L4 236.75L4 235.25ZM130.25 216L130.25 209L131.75 209L131.75 216L130.25 216ZM111 235.25C121.631 235.25 130.25 226.631 130.25 216L131.75 216C131.75 227.46 122.46 236.75 111 236.75L111 235.25Z" fill="white" />
              <mask id="path-5-outside-1_2_3" maskUnits="userSpaceOnUse" x="81.5563" y="0.92721" width="242.516" height="244.589" fill="black">
                <rect fill="white" x="81.5563" y="0.92721" width="242.516" height="244.589" />
                <path d="M84 123C84 189.274 137.278 243 203 243C268.722 243 322 189.274 322 123C322 56.7258 268.722 3.00001 203 3.00001C137.278 3.00002 84 56.7259 84 123ZM292.25 123C292.25 172.706 252.291 213 203 213C153.709 213 113.75 172.706 113.75 123C113.75 73.2944 153.709 33 203 33C252.291 33 292.25 73.2944 292.25 123Z" />
              </mask>
              <path d="M84 123C84 189.274 137.278 243 203 243C268.722 243 322 189.274 322 123C322 56.7258 268.722 3.00001 203 3.00001C137.278 3.00002 84 56.7259 84 123ZM292.25 123C292.25 172.706 252.291 213 203 213C153.709 213 113.75 172.706 113.75 123C113.75 73.2944 153.709 33 203 33C252.291 33 292.25 73.2944 292.25 123Z" fill="white" />
              <path d="M84 123C84 189.274 137.278 243 203 243C268.722 243 322 189.274 322 123C322 56.7258 268.722 3.00001 203 3.00001C137.278 3.00002 84 56.7259 84 123ZM292.25 123C292.25 172.706 252.291 213 203 213C153.709 213 113.75 172.706 113.75 123C113.75 73.2944 153.709 33 203 33C252.291 33 292.25 73.2944 292.25 123Z" stroke="white" stroke-width="4" mask="url(#path-5-outside-1_2_3)" />
              <mask id="path-6-outside-2_2_3" maskUnits="userSpaceOnUse" x="81.5563" y="0.92721" width="242.516" height="244.589" fill="black">
                <rect fill="white" x="81.5563" y="0.92721" width="242.516" height="244.589" />
                <path d="M203 3.00001C179.464 3.00002 156.457 10.0379 136.887 23.2237C117.318 36.4094 102.065 55.1509 93.0584 77.078C84.0515 99.0052 81.6949 123.133 86.2866 146.411C90.8782 169.689 102.212 191.071 118.854 207.853C135.497 224.635 156.701 236.064 179.784 240.694C202.868 245.325 226.795 242.948 248.539 233.866C270.284 224.783 288.869 209.402 301.945 189.668C315.021 169.935 322 146.734 322 123L292.25 123C292.25 140.8 287.016 158.201 277.209 173.001C267.402 187.802 253.463 199.337 237.155 206.149C220.846 212.961 202.901 214.743 185.588 211.271C168.275 207.798 152.373 199.226 139.891 186.64C127.409 174.053 118.909 158.016 115.465 140.558C112.021 123.1 113.789 105.004 120.544 88.5585C127.299 72.1132 138.738 58.0571 153.415 48.1678C168.092 38.2784 185.348 33 203 33L203 3.00001Z" />
              </mask>
              <path d="M203 3.00001C179.464 3.00002 156.457 10.0379 136.887 23.2237C117.318 36.4094 102.065 55.1509 93.0584 77.078C84.0515 99.0052 81.6949 123.133 86.2866 146.411C90.8782 169.689 102.212 191.071 118.854 207.853C135.497 224.635 156.701 236.064 179.784 240.694C202.868 245.325 226.795 242.948 248.539 233.866C270.284 224.783 288.869 209.402 301.945 189.668C315.021 169.935 322 146.734 322 123L292.25 123C292.25 140.8 287.016 158.201 277.209 173.001C267.402 187.802 253.463 199.337 237.155 206.149C220.846 212.961 202.901 214.743 185.588 211.271C168.275 207.798 152.373 199.226 139.891 186.64C127.409 174.053 118.909 158.016 115.465 140.558C112.021 123.1 113.789 105.004 120.544 88.5585C127.299 72.1132 138.738 58.0571 153.415 48.1678C168.092 38.2784 185.348 33 203 33L203 3.00001Z" fill="white" />
              <path d="M203 3.00001C179.464 3.00002 156.457 10.0379 136.887 23.2237C117.318 36.4094 102.065 55.1509 93.0584 77.078C84.0515 99.0052 81.6949 123.133 86.2866 146.411C90.8782 169.689 102.212 191.071 118.854 207.853C135.497 224.635 156.701 236.064 179.784 240.694C202.868 245.325 226.795 242.948 248.539 233.866C270.284 224.783 288.869 209.402 301.945 189.668C315.021 169.935 322 146.734 322 123L292.25 123C292.25 140.8 287.016 158.201 277.209 173.001C267.402 187.802 253.463 199.337 237.155 206.149C220.846 212.961 202.901 214.743 185.588 211.271C168.275 207.798 152.373 199.226 139.891 186.64C127.409 174.053 118.909 158.016 115.465 140.558C112.021 123.1 113.789 105.004 120.544 88.5585C127.299 72.1132 138.738 58.0571 153.415 48.1678C168.092 38.2784 185.348 33 203 33L203 3.00001Z" stroke="white" stroke-width="4" mask="url(#path-6-outside-2_2_3)" />
              <mask id="path-7-outside-3_2_3" maskUnits="userSpaceOnUse" x="81.5563" y="0.927223" width="124.367" height="244.589" fill="black">
                <rect fill="white" x="81.5563" y="0.927223" width="124.367" height="244.589" />
                <path d="M203 3.00001C187.373 3.00002 171.898 6.10391 157.461 12.1345C143.023 18.165 129.904 27.0042 118.854 38.1472C107.804 49.2903 99.0387 62.519 93.0584 77.078C87.078 91.6371 84 107.241 84 123C84 138.759 87.0781 154.363 93.0584 168.922C99.0387 183.481 107.804 196.71 118.854 207.853C129.905 218.996 143.023 227.835 157.461 233.866C171.898 239.896 187.373 243 203 243L203 213C191.28 213 179.674 210.672 168.846 206.149C158.017 201.626 148.178 194.997 139.891 186.64C131.603 178.282 125.029 168.361 120.544 157.442C116.059 146.522 113.75 134.819 113.75 123C113.75 111.181 116.059 99.4778 120.544 88.5585C125.029 77.6392 131.603 67.7177 139.891 59.3604C148.178 51.0031 158.017 44.3738 168.846 39.8509C179.674 35.3279 191.28 33 203 33L203 3.00001Z" />
              </mask>
              <path d="M203 3.00001C187.373 3.00002 171.898 6.10391 157.461 12.1345C143.023 18.165 129.904 27.0042 118.854 38.1472C107.804 49.2903 99.0387 62.519 93.0584 77.078C87.078 91.6371 84 107.241 84 123C84 138.759 87.0781 154.363 93.0584 168.922C99.0387 183.481 107.804 196.71 118.854 207.853C129.905 218.996 143.023 227.835 157.461 233.866C171.898 239.896 187.373 243 203 243L203 213C191.28 213 179.674 210.672 168.846 206.149C158.017 201.626 148.178 194.997 139.891 186.64C131.603 178.282 125.029 168.361 120.544 157.442C116.059 146.522 113.75 134.819 113.75 123C113.75 111.181 116.059 99.4778 120.544 88.5585C125.029 77.6392 131.603 67.7177 139.891 59.3604C148.178 51.0031 158.017 44.3738 168.846 39.8509C179.674 35.3279 191.28 33 203 33L203 3.00001Z" fill="white" />
              <path d="M203 3.00001C187.373 3.00002 171.898 6.10391 157.461 12.1345C143.023 18.165 129.904 27.0042 118.854 38.1472C107.804 49.2903 99.0387 62.519 93.0584 77.078C87.078 91.6371 84 107.241 84 123C84 138.759 87.0781 154.363 93.0584 168.922C99.0387 183.481 107.804 196.71 118.854 207.853C129.905 218.996 143.023 227.835 157.461 233.866C171.898 239.896 187.373 243 203 243L203 213C191.28 213 179.674 210.672 168.846 206.149C158.017 201.626 148.178 194.997 139.891 186.64C131.603 178.282 125.029 168.361 120.544 157.442C116.059 146.522 113.75 134.819 113.75 123C113.75 111.181 116.059 99.4778 120.544 88.5585C125.029 77.6392 131.603 67.7177 139.891 59.3604C148.178 51.0031 158.017 44.3738 168.846 39.8509C179.674 35.3279 191.28 33 203 33L203 3.00001Z" stroke="white" stroke-width="4" mask="url(#path-7-outside-3_2_3)" />
              <mask id="path-8-outside-4_2_3" maskUnits="userSpaceOnUse" x="81.5563" y="0.927223" width="124.367" height="124.367" fill="black">
                <rect fill="white" x="81.5563" y="0.927223" width="124.367" height="124.367" />
                <path d="M203 3.00001C187.373 3.00002 171.898 6.10391 157.461 12.1345C143.023 18.165 129.904 27.0042 118.854 38.1472C107.804 49.2903 99.0387 62.519 93.0584 77.078C87.078 91.6371 84 107.241 84 123L113.75 123C113.75 111.181 116.059 99.4778 120.544 88.5585C125.029 77.6392 131.603 67.7177 139.891 59.3604C148.178 51.0031 158.017 44.3738 168.846 39.8509C179.674 35.3279 191.28 33 203 33L203 3.00001Z" />
              </mask>
              <path d="M203 3.00001C187.373 3.00002 171.898 6.10391 157.461 12.1345C143.023 18.165 129.904 27.0042 118.854 38.1472C107.804 49.2903 99.0387 62.519 93.0584 77.078C87.078 91.6371 84 107.241 84 123L113.75 123C113.75 111.181 116.059 99.4778 120.544 88.5585C125.029 77.6392 131.603 67.7177 139.891 59.3604C148.178 51.0031 158.017 44.3738 168.846 39.8509C179.674 35.3279 191.28 33 203 33L203 3.00001Z" fill="white" />
              <path d="M203 3.00001C187.373 3.00002 171.898 6.10391 157.461 12.1345C143.023 18.165 129.904 27.0042 118.854 38.1472C107.804 49.2903 99.0387 62.519 93.0584 77.078C87.078 91.6371 84 107.241 84 123L113.75 123C113.75 111.181 116.059 99.4778 120.544 88.5585C125.029 77.6392 131.603 67.7177 139.891 59.3604C148.178 51.0031 158.017 44.3738 168.846 39.8509C179.674 35.3279 191.28 33 203 33L203 3.00001Z" stroke="white" stroke-width="4" mask="url(#path-8-outside-4_2_3)" />
            </svg>


            <h1 className='text-[2rem] font-[900] text-white absolute text-center top-[37%]' style={{ textShadow: "2px 2px 5px #000" }}>S&P </h1>
            <h1 className='text-[1.8rem] font-[900] text-white absolute text-center top-[50%]' style={{ textShadow: "2px 2px 5px #000" }}>A- Rated  </h1>
          </div>
          <div className='basis-[32%] h-full w-full flex justify-between items-center flex-col'>
            <div className='basis-[48%] h-full w-full flex justify-center flex-col gap-[10px]'>
              <p className='text-[1.3rem] font-[700] text-white text-left'>Advanced Risk Monitoring</p>
              <p className='paragraph text-left'>Portfolios are protected with continuous tracking and comprehensive measure of risk exposure, allowing for proactive decisions in fast- moving markets.</p>
            </div>
            <div className='basis-[48%] h-full w-full flex justify-center flex-col gap-[10px]'>
              <p className='text-[1.3rem] font-[700] text-white text-left'>Strength & Securit</p>
              <p className='paragraph text-left'>Interactive Brokers holds +$17B in equity capital, no debt, and maintains an A- credit rating from S&P—providing one of the most secure platforms in the industry for safeguarding client assets.</p>
            </div>
          </div>
        </div>
        <div className='basis-[65%] h-full w-full flex md:hidden justify-around items-center flex-col'>
          <div className='basis-[20%] h-full w-full flex justify-center items-center '>
            <p className='text-[1.3rem] font-[700] text-white text-center'>#1 Prime Broker for Hedge Funds with AUM &lt; $50 million</p>
          </div>
          <div className='basis-[20%] h-full w-full flex justify-center items-start flex-col'>
            <p className='text-[1.3rem] font-[700] text-white text-left'>Advanced Risk Monitoring</p>
            <p className='paragraph text-justify'>Portfolios are protected with continuous tracking and comprehensive measure of risk exposure, allowing for proactive decisions in fast- moving markets.</p>
          </div>
          <div className='basis-[20%] h-full w-full flex justify-center items-start flex-col'>
            <p className='text-[1.3rem] font-[700] text-white text-left'>Cost Efficiency</p>
            <p className='paragraph text-justify'>No custody fees, ultra-low commissions, and minimized hidden execution costs significantly reduce fee drag over time—keeping more of your capital invested and compounding</p>
          </div>
          <div className='basis-[20%] h-full w-full flex justify-center items-start flex-col'>
            <p className='text-[1.3rem] font-[700] text-white text-left'>Strength & Securit</p>
            <p className='paragraph text-justify'>Interactive Brokers holds +$17B in equity capital, no debt, and maintains an A- credit rating from S&P—providing one of the most secure platforms in the industry for safeguarding client assets.</p>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default SmartTech;




