import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Bg1 from '../../assets/bg1.jpg';
import Bg2 from '../../assets/main12.jpg';

import LineChart from './Graphs/LineChart';
import NewHeads from './NewHeads';
import SectorPerformanceGrid from './Graphs/SectorPerformanceGrid';
import FearMeter from './Graphs/FearMeter';


// ONE overlay for everything
const LoginOverlay = () => {
  return (
    <div className="absolute inset-0 z-20 bg-white/20 backdrop-blur-xl rounded-[12px] flex justify-center items-center">
      <h3
        className="tertiaryTitle text-[#9932CC] bg-white px-10 py-5 rounded-xl shadow-2xl"
        style={{ boxShadow: "5px 5px 25px #00000060" }}
      >
        Login to See
      </h3>
    </div>
  );
};

const Insights = () => {
  const [insight, setInsights] = useState("Market");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  return (
    <div className="bg-black">

      {/* 🔥 EVERYTHING IS INSIDE ONE SINGLE RELATIVE WRAPPER */}
      <div className="relative w-full flex flex-col items-center">

        {/* 🔥 ONE OVERLAY ONLY */}
        {!isLoggedIn && <LoginOverlay />}

        {/* === SECTION 1 === */}
        <div
          className="bg-black h-auto md:h-[175vh] w-full flex justify-center items-center flex-col gap-[20px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("${Bg1}")` }}
        >

          <div className="h-[85%] w-[90%] flex justify-center items-center flex-col gap-[30px] mt-[50px]">

            <h2
              className="titleText mt-[50px] md:mt-[0] text-center"
              style={{ fontFamily: "Satoshi", fontSize: "3.2rem" }}
            >
              Foinikas Insights
            </h2>

            <p className="paragraph text-center px-[15%]">
              Stay ahead with expert analysis and curated insights...
            </p>

            <div className="h-[85%] w-full flex justify-between items-center flex-col">

              <div className="basis-[100%] h-full w-full flex justify-between items-start flex-col md:flex-row">

                {/* Left Column */}
                <div className="basis-[57%] h-full w-full flex flex-col items-center gap-[15px]">

                  <div className="basis-[20%] w-full flex flex-col gap-[15px] justify-start items-start">
                    <h3 className="secondaryTitle text-white">{insight} Overview</h3>
                    <p className="paragraph">
                      Track the pulse of global markets with our concise summaries...
                    </p>
                  </div>

                  <div
                    className="basis-[20%] w-full flex justify-center items-center bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[12px]"
                    style={{ boxShadow: "3px 3px 25px #000" }}
                  >
                    <FearMeter />
                  </div>

                  <div
                    className="basis-[60%] w-full relative bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[12px] flex justify-center items-center overflow-hidden"
                    style={{ boxShadow: "3px 3px 25px #000" }}
                  >
                    <LineChart small={false} indice={'SPY'} />
                  </div>

                </div>

                {/* Right Column */}
                <div className="basis-[40%] h-[60%] mt-[20px] md:mt-[0] w-full flex flex-col items-center relative">

                  <div
                    className="md:basis-[100%] h-full w-full px-[30px] py-[20px] bg-[rgba(255,255,255,0.1)] backdrop-blur-[5px] rounded-[12px] overflow-hidden"
                    style={{ boxShadow: "3px 3px 25px #000" }}
                  >
                    <div className="w-full h-[10%] flex justify-between items-center">
                      <h4 className="tertiaryTitle text-white">News Headlines</h4>
                      <Link to="/news" className="secondary-btn hidden md:flex">Read More</Link>
                      <Link to="/news" className="secondary-btn md:hidden">Read</Link>
                    </div>

                    <div className="h-[1px] w-full bg-[#d9d9d9] mt-[15px]" />

                    <NewHeads />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* === SECTION 2 === */}
        <div
          className="bg-black h-auto md:h-[105vh] w-full mt-[40px] flex flex-col justify-center items-center gap-[40px] bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("${Bg2}")` }}
        >

          <div className="md:basis-[40%] w-[90%] flex flex-col md:flex-row gap-[20px] relative">

            <div className="basis-[24%] bg-[rgba(255,255,255,0.3)] hover:bg-[#c8bdf45c] rounded-[12px] backdrop-blur-[5px] h-[80%] w-full flex justify-center items-center"
              style={{ boxShadow: "2px 5px 10px #000" }}
            >
              <LineChart small={true} indice="DIA" />
            </div>

            <div className="basis-[24%] bg-[rgba(255,255,255,0.3)] hover:bg-[#c8bdf45c] rounded-[12px] backdrop-blur-[5px] h-[80%] w-full flex justify-center items-center"
              style={{ boxShadow: "2px 5px 10px #000" }}
            >
              <LineChart small={true} indice="QQQ" />
            </div>

            <div className="basis-[24%] bg-[rgba(255,255,255,0.3)] hover:bg-[#c8bdf45c] rounded-[12px] backdrop-blur-[5px] h-[80%] w-full flex justify-center items-center"
              style={{ boxShadow: "2px 5px 10px #000" }}
            >
              <LineChart small={true} indice="XLK" />
            </div>

            <div className="basis-[24%] bg-[rgba(255,255,255,0.3)] hover:bg-[#c8bdf45c] rounded-[12px] backdrop-blur-[5px] h-[80%] w-full flex justify-center items-center"
              style={{ boxShadow: "2px 5px 10px #000" }}
            >
              <LineChart small={true} indice="EEM" />
            </div>

          </div>

          <div
            className="basis-[50%] w-[90%] bg-[rgba(255,255,255,0.1)] rounded-[12px] backdrop-blur-[5px] mb-[80px] p-[2] relative"
            style={{ boxShadow: "5px 5px 15px #000" }}
          >
            <SectorPerformanceGrid />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Insights;
