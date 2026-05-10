import React from 'react'

const Disclosure = () => {
    return (
        <div className='h-auto w-full flex justify-center items-center bg-[#1f0713]'>
            <div className='h-auto w-[90%] bg-[blue] px-[50px] py-[40px] rounded-[12px] my-[10%] gap-[30px] flex justify-evenly items-start flex-col bg-[rgba(255,255,255,0.1)] backdrop-blur-[15px]'>

                <h4 className='secondaryTitle text-white'>SFDR Disclosure (EU)</h4>

                <h5 className='tertiaryTitle text-white'>Document History</h5>
                <div className=''>
                    <p className='paragraph'>Version 1 – Initial version – 05 February 2025</p>
                </div>

                <h5 className='tertiaryTitle text-white'>1. Financial Market Participant & Adviser Status</h5>
                <div className=''>
                    <p className='paragraph'>The Company qualifies as a Financial Market Participant and Financial Adviser as defined under Article 2 of the SFDR.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>2. Article 3 – Integration of Sustainability Risks</h5>
                <div className=''>
                    <p className='paragraph'>As a financial market participant and financial adviser, Article 3 of SFDR requires that the Company’s website outlines information about its policies on the integration of sustainability risks in their investment decision-making process and/or investment advice.</p>
                    <p className='paragraph'>The Company currently extracts an ESG score for every financial instrument as part of its Target Market Assessment.</p>
                    <p className='paragraph'>Following Suitability Assessment undertaken on each of the Company’s clients, the Company would determine which investments may be suitable for such clients, based on their knowledge and experience, investment objectives, risk tolerance, financial situation and sustainability preferences.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>3. Article 4 – No Consideration of Principal Adverse Impacts</h5>
                <div className=''>
                    <p className='paragraph'>As a financial market participant and financial adviser, Article 4 of the SFDR requires that the Company’s website outlines information about whether they consider principal adverse impacts of its investment decisions and/or investment advice on sustainability factors.</p>
                    <p className='paragraph'>The Company does not consider principal adverse impacts of its investment decisions on sustainability factors. This is due to the clients of the Company not having sustainable investing as a priority.</p>
                    <p className='paragraph'>Nevertheless, the Company may consider such principal adverse impacts in the future should there be increased interest from clients and should attractive opportunities be presented. The Company shall re-assess its position on at least an annual basis.</p>
                </div>

                <h5 className='tertiaryTitle text-white'>4. Article 5 – Remuneration Policy</h5>
                <div className=''>
                    <p className='paragraph'>The Company is required under Article 5 of SFDR to include information within its Remuneration Policy of how its policy is in line with the integration of sustainability risks.</p>
                    <p className='paragraph'>The Company has included within its Remuneration Policy information about how its Remuneration Policy is consistent with the integration of sustainability risks. The Company promotes transparency in its Remuneration Policy and ensures that its investment decision-making process and/or investment advice promotes sound and effective risk management with respect to sustainability risks.</p>
                    <p className='paragraph'>As outlined within its Remuneration Policy, the Company typically pays its identified staff fixed remuneration. Variable remuneration is not paid out unless it is determined to be justified by the Company’s governing body following a performance assessment based on quantitative (financial) and not qualitative (non-financial) criteria.</p>
                    <p className='paragraph'>In this respect, the Company also does not currently have in place any incentives when it comes to investing or advising in products with sustainable characteristics over those that do not. Variable remuneration is therefore deemed to have a limited impact on the risk profile of the Company’s clients, as this prevents excessive risk taking in respect of sustainability risks.</p>
                    <p className='paragraph'>In light of the above, it is deemed that there is minimal risk of misalignment with the integration of sustainability risk in the investment decision making process of the Company in respect of its clients.</p>
                </div>

            </div>
        </div>
    )
}

export default Disclosure
