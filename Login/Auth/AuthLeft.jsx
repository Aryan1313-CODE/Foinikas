import React from 'react'

const AuthLeft = () => {
    return (
        <div className='h-full pb-[30px] w-full flex justify-start items-center px-[50px] customisedheight'
            style={{ background: "linear-gradient(180deg, #4F012E 0%, #AA0063 100%)" }}
        >
            <div className='h-[95%] w-[90%] flex justify-between items-start flex-col moveup'>

    <h1 className='titleText mt-[10px] mb-[20px] placing'
        style={{ fontFamily: "Crimson Pro" }}
    >
        Why Choose Foinikas?
    </h1>

    <div className='h-[65%] w-[100%] flex justify-between items-start flex-col adjustingup gap-[15px]'>

        {/* ITEM 1 */}
        <div className='basis-[23%] h-full w-full flex justify-between items-start flex row gap-[20px]'>

            <div className='h-[40%] w-[10%] bg-[#33415580] rounded-2xl flex justify-center items-center iconWrapper'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="84" height="84" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-shield h-6 w-6 text-blue-400 featureIcon"
                >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
            </div>

            <div className='w-[88%] h-full flex flex-col items-start gap-[10px]'>
                <h4 className='tertiaryTitle text-white forauthleft featureTitle' style={{ fontSize: "1.2rem" }}>
                    Bank-grade security
                </h4>
                <p className='paragraph abouttitle featureText'>
                    Fully regulated European wealth manager offering transparent pricing and industry-leading security infrastructure to safeguard your investments
                </p>
            </div>

        </div>

        {/* ITEM 2 */}
        <div className='basis-[23%] h-full w-full flex justify-between items-start flex row mb-[20px] gap-[20px] littlemargin'>

            <div className='h-[40%] w-[10%] bg-[#33415580] rounded-2xl flex justify-center items-center mt-[10px] iconWrapper'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-trending-up h-6 w-6 text-green-400 featureIcon"
                >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
            </div>

            <div className='w-[88%] h-full flex flex-col items-start gap-[10px]'>
                <h4 className='tertiaryTitle text-white forauthleft mt-[10px] featureTitle' style={{ fontSize: "1.2rem" }}>
                    Performance that adapts with markets
                </h4>
                <p className='paragraph abouttitle featureText'>
                    Proprietary strategies dynamically adjust to evolving conditions—so your capital is always working smarter.
                </p>
            </div>

        </div>

        {/* ITEM 3 */}
        <div className='basis-[23%] h-full w-full flex justify-between items-start flex row gap-[20px]'>

            <div className='h-[40%] w-[10%] bg-[#33415580] rounded-2xl flex justify-center items-center iconWrapper'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-globe h-6 w-6 text-purple-400 featureIcon"
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                </svg>
            </div>

            <div className='w-[88%] h-full flex flex-col items-start gap-[10px]'>
                <h4 className='tertiaryTitle text-white forauthleft featureTitle' style={{ fontSize: "1.2rem" }}>
                    Global reach, tailored to you
                </h4>
                <p className='paragraph abouttitle featureText'>
                    Invest across markets, asset classes, and currencies—backed by deep portfolio intelligence.
                </p>
            </div>

        </div>

        {/* ITEM 4 */}
        <div className='basis-[23%] h-full w-full flex justify-between items-start flex row gap-[20px] littlemargin'>

            <div className='h-[40%] w-[10%] bg-[#33415580] rounded-2xl flex justify-center items-center iconWrapper'>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-users h-6 w-6 text-cyan-400 featureIcon"
                >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            </div>

            <div className='w-[88%] h-full flex flex-col items-start gap-[10px]'>
                <h4 className='tertiaryTitle text-white forauthleft featureTitle' style={{ fontSize: "1.2rem" }}>
                    Your goals, guided by expertise
                </h4>
                <p className='paragraph abouttitle featureText'>
                    Partner with seasoned professionals who understand your ambitions and navigate with clarity.
                </p>
            </div>

        </div>

    </div>

</div>


        </div>
    )
}

export default AuthLeft

