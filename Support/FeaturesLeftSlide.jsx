import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './flSlide.css'

import Airplane from '../../assets/dotPattern.png'

gsap.registerPlugin(ScrollTrigger);

const FeaturesLeftSlide = () => {
  const containerRef = useRef(null);
  const cardStackRef = useRef(null);

  const cardData = [
    {
      title: "Liquidity Booster",
      subText: "Cash Allocation",
      desc: "Generate steady, growing income through diversified sources built to beat inflation and banking interest. Perfect for income-focused investors who value predictability over peak returns"
    },
    {
      title: "Resilient Growth",
      subText: "Managed Index Portfolios",
      desc: "Stay diversified, liquid, and cost-effective with a portfolio powered by institutional ETF strategies. Designed to flex across life stages and risk levels—your smart core for steady growth"
    },
    {
      title: "Strategic Holdings",
      subText: "Direct Equity Investing",
      desc: "Build focused, long-term wealth through carefully selected, high-conviction stock picks—ideal for any mid-career investor seeking meaningful growth"
    },
    {
      title: "Wealth Scaling",
      subText: "Thematic Investing",
      desc: "Capture long-term upside by investing in long-run secular mega trends and innovation. Best suited for early-stage investors willing to take on more risk in exchange for greater potential return over time"
    }
  ]

  useEffect(() => {
    if (!containerRef.current || !cardStackRef.current) return;

    const cards = cardStackRef.current.querySelectorAll('.card');
    const totalCards = cards.length - 1;

    gsap.set(cards, {
        x: (i) => i === 0 ? '0vw' : `${100 + (i * 5)}vw`,
    });

    const animation = gsap.to(cards, {
      x: (i) => {
        // MODIFIED: Decreased the jump between values again to create an even larger gap.
        const customOffsets = [0, -40, -50, -60, -70]; // in vw
        return customOffsets[i] ? `${customOffsets[i]}vw` : '0vw';
      },
      duration: (i) => 0.5 * i,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        markers: false,
        scrub: true,
        end: `+=${totalCards * 100}% bottom`,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div style={{ overflowX:"hidden", overflowY:"hidden" }}>
      {/* Fixed progress indicator */}
      <div className="fixed top-[1vw] w-[100%] h-[0.5vw] bg-black z-50"></div>

      <section
        ref={containerRef}
        className="stacking-cards"
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflowY: "hidden",
          background: "linear-gradient(180deg, #4F012E 0%, #8c0663 100%)"
        }}
      >
        <img src={Airplane} alt="" style={{ position: 'absolute', bottom: '-5%', width: '100%' }} />
        
        <div style={{ height: "25%", width: "60%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h1 style={{
            color: "#fff",
            fontSize: "2.5vw",
            fontWeight: 500,
            fontFamily: "Satoshi",
            textAlign: "center",
            marginTop: "5vh"
          }}>
            Align Strategy with Life Stage to Optimize Every Aspect of Your Portfolio
          </h1>
        </div>

        <div style={{ width: "100%", height: "55%", padding: "0 5vw", marginLeft: "-30px" }}>
          <div ref={cardStackRef} className="card-stack" style={{ display: "flex", gap: "4vw", height: "100%" }}>
            {/* Intro Card */}
            <div className="card card-intro" style={{ flexShrink: 0, width: "90vw", maxWidth: "45vw", height: "100%" }}>
              <div style={{ height: "100%", padding: "20px" }}></div>
            </div>

            {/* Numbered Cards */}
            {cardData.map((data, idx) => (
              <div key={idx} className="card card-slide" style={{ flexShrink: 0, width: "45vw", maxWidth: "25vw", height: "100%" }}>
                <div style={{ height: "100%", padding: "3vw 2vw", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "1vw" }}>
                  <small style={{ color: "#fff" }}>{data.subText}</small>
                  <h3 style={{ color: "#fff", fontSize: "1.5vw", margin: 0 }}>{data.title}</h3>
                  <p style={{ color: "#fff", width: "75%", fontSize: "1vw" }}>{data.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesLeftSlide;