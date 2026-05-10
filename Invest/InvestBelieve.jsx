import React from 'react'
import Bg1 from '../../assets/bg1Flip.jpg';
import Believe from '../../assets/believe.jpg';
import './invest.css'

const InvestBelieve = () => {
    return (
        <div
            className='bg-black h-[1500px] md:h-[100vh] w-full flex justify-center items-center gap-[20px] flex-col bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url("${Bg1}")` }}
        >
            <div className='h-[95%] md:h-[80%] w-[95%] md:w-[80%] flex justify-between items-center flex-col md:flex-row'>

                {/* Left Column */}
                <div className='basis-[32%] h-full w-full flex justify-between items-center flex-col md:flex-col gap-[5px]'>

                    {/* Card 1 */}
                    <div className='basis-[48%] h-full w-full ic1 rounded-[12px] flex justify-center items-center'>
                        <div className='h-[90%] w-[90%] ac-hover flex flex-col justify-center items-start px-[28px] py-[28px] bg-[rgba(0,0,0,0.35)] backdrop-blur-[4px] rounded-[12px] overflow-y-auto custom-scroll text-left'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white giventitle mb-[15px] text-center md:text-left'>
                                Goals Deserve Strategy
                            </h4>
                            <p className='paragraph givenpara leading-relaxed text-left'>
                                Every investor has distinct financial objectives, risk preferences, and timelines.
                                We construct bespoke portfolio strategies aligned with your evolving needs—leveraging
                                institutional-grade tools, tactical flexibility, and a disciplined, goals-based
                                framework to help you build and preserve wealth over time.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='basis-[48%] h-full w-full ic1 rounded-[12px] flex justify-center items-center'>
                        <div className='h-[90%] w-[90%] ac-hover flex flex-col justify-center items-start px-[28px] py-[28px] bg-[rgba(0,0,0,0.35)] backdrop-blur-[4px] rounded-[12px] overflow-y-auto custom-scroll text-left'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white giventitle mb-[15px] text-center md:text-left'>
                                Beyond the Noise
                            </h4>
                            <p className='paragraph givenpara leading-relaxed text-left'>
                                We take a research-driven, fundamentals-first approach to portfolio construction.
                                Rather than chasing market trends or reacting to headlines, we focus on long-term
                                return drivers—structural growth themes, macroeconomic inflection points, and
                                risk-adjusted opportunities across asset classes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Middle Column */}
                <div className='basis-[32%] h-full w-full rounded-[12px] bg-cover bg-center overflow-hidden'
                    style={{ backgroundImage: `url("${Believe}")` }}>
                    <div className='h-full w-full bg-[rgba(0,0,0,0.3)] flex flex-col justify-between items-center py-[20px]'>
                        <div className='h-[10%] w-[90%] ac-hover bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] rounded-[12px] flex justify-center items-center'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h2 className='titleText text-white' style={{ fontFamily: "Satoshi" }}>We Believe</h2>
                        </div>

                        {/* Fixed Scrollable Text Section */}
                        <div className='h-auto max-h-[60%] w-[90%] ac-hover flex flex-col justify-start items-start px-[28px] py-[28px] bg-[rgba(0,0,0,0.4)] backdrop-blur-[10px] rounded-[12px] overflow-y-auto custom-scroll text-left'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white giventitle mb-[15px] text-center md:text-left'>
                                Life Doesn’t Track an Index
                            </h4>
                            <p className='paragraph givenpara leading-relaxed text-left'>
                                Life is dynamic, and your financial strategy should be too. While markets are cyclical,
                                personal circumstances shift in real time. Static, index-linked portfolios often fail
                                to respond when it matters most. We actively manage allocations, risk exposures, and
                                rebalancing to ensure your portfolio stays aligned with your real-world financial journey.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className='basis-[32%] h-full w-full flex justify-between items-center flex-col gap-[5px]'>

                    {/* Card 4 */}
                    <div className='basis-[48%] h-full w-full ic1 rounded-[12px] flex justify-center items-center'>
                        <div className='h-[90%] w-[90%] ac-hover flex flex-col justify-center items-start px-[28px] py-[28px] bg-[rgba(0,0,0,0.35)] backdrop-blur-[4px] rounded-[12px] overflow-y-auto custom-scroll text-left'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white giventitle mb-[15px] text-center md:text-left'>
                                Expertise Protects
                            </h4>
                            <p className='paragraph givenpara leading-relaxed text-left'>
                                Behavioral missteps—such as panic selling, market timing, and performance chasing—are among
                                the leading causes of investor underperformance. Our advisors provide ongoing guidance,
                                helping you navigate volatility, maintain perspective, and stay aligned with your long-term
                                investment policy.
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className='basis-[48%] h-full w-full ic1 rounded-[12px] flex justify-center items-center'>
                        <div className='h-[90%] w-[90%] ac-hover flex flex-col justify-center items-start px-[28px] py-[28px] bg-[rgba(0,0,0,0.35)] backdrop-blur-[4px] rounded-[12px] overflow-y-auto custom-scroll text-left'
                            style={{ boxShadow: "2px 2px 5px #000" }}>
                            <h4 className='tertiaryTitle text-white giventitle mb-[15px] text-center md:text-left'>
                                Technology-Powered Insight
                            </h4>
                            <p className='paragraph givenpara leading-relaxed text-left'>
                                We harness advanced portfolio analytics, real-time risk monitoring, and tax-efficient
                                rebalancing technologies to drive precision and scalability. But we never replace judgment
                                with algorithms. Strategic decision-making, especially in periods of uncertainty, demands
                                experienced insight—and we deliver both.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestBelieve
