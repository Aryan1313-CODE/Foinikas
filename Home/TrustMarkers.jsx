import React from 'react';

const cardData = [
  { stat: "+160", text: "Investable markets for globally, diversified, resilient portfolios", area: 'a' },
  { stat: "+100", text: "Asset classes and return sources to unlock performance potential", area: 'b' },
  { stat: "−98%", text: <>Execution slippage reduced by up to 98% vs traditional banks—preserving more of your portfolio's value</>, area: 'c' },
  { stat: "+43k", text: "Instruments available to diversify portfolios with institutional breadth", area: 'd' },
  { stat: "99.9%", text: "Platform uptime—built for stability, even in extreme market conditions", area: 'e' }
];

// TrustCard Component
// TrustCard Component
const TrustCard = ({ stat, text }) => (
  <div 
    // MODIFIED: h-fit changed to h-full
    className='relative w-[100%] h-full rounded-md flex justify-center items-center p-[1vw] 2xl:p-[1rem] z-1000' 
    style={{ background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)" }}
  >
    <div 
      // MODIFIED: justify-end changed to justify-start
      className='relative h-full w-[100%] flex flex-col justify-start items-start gap-[0.5vw] p-[1vw] sm:p-[2vw] bg-[rgba(0,0,0,0.2)] backdrop-blur-[8px] rounded-md z-1000' 
      style={{ boxShadow: "1px 1px 2px #000" }}
    >
      <h3 className='text-white font-bold text-[6vw] md:text-[2.5vw] leading-tight 2xl:text-[3rem] trustclass'>
        {stat}
      </h3>
      <p className='text-white text-[2vw] md:text-[0.8rem] leading-snug 2xl:text-[1rem] trustclass'>
        {text}
      </p>
    </div>
  </div>
);

// TrustMarkers Component
// TrustMarkers Component
const TrustMarkers = () => {
  return (
    <div className='w-[100%] h-auto pt-[40px] mb-[40px] flex flex-col lg:flex-row gap-[1vw] adjustpaddingtop'>

      {/* Left Column */}
      <div className="flex flex-col w-[100%] lg:w-[40%] gap-[1vw]">
        {/* MODIFIED: Removed h-[120px] and lg:h-auto */}
        <div className="lg:flex-1">
          <TrustCard stat={cardData[0].stat} text={cardData[0].text} />
        </div>
        {/* MODIFIED: Removed h-[120px] and lg:h-auto */}
        <div className="lg:flex-[1.2]">
          <TrustCard stat={cardData[1].stat} text={cardData[1].text} />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col w-[100%] lg:w-[60%] gap-[1vw]">
        {/* MODIFIED: Removed h-[120px] and lg:h-auto, added flex-[1.2] to match image */}
        <div className="lg:flex-[1.2]">
          <TrustCard stat={cardData[2].stat} text={cardData[2].text} />
        </div>
        
        {/* MODIFIED: Added lg:flex-1 to this wrapper to balance the column */}
        <div className="flex flex-col sm:flex-row w-[100%] gap-[1vw] lg:flex-1">
          {/* MODIFIED: Removed h-[120px] and sm:h-auto */}
          <div className="w-[100%] sm:w-[50%]">
            <TrustCard stat={cardData[3].stat} text={cardData[3].text} />
          </div>
          {/* MODIFIED: Removed h-[120px] and sm:h-auto */}
          <div className="w-[100%] sm:w-[50%]">
            <TrustCard stat={cardData[4].stat} text={cardData[4].text} />
          </div>
        </div>
      </div>

    </div>
  );
}
export default TrustMarkers
// (cardData array and export default remain the same)
