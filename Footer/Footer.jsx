import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/newLogoFooter.png'


const Footer = () => {
  return (
    <div className='h-auto md:h-[60vh] w-full bg-cover bg-bottom relative tabfooter'
    >
      <div className='h-full w-full bg-[#66023C] absolute z-[-2]'></div>
      <div className='h-full w-full bg-[rgba(0,0,0,0.5)] flex  justify-end items-center flex-col '>
        <div className='w-[95%] h-[90%]  flex justify-between items-center flex-col mt-[50px] md:mt-[0] '>

          <div className='basis-[30%] h-full w-full flex justify-between items-center flex-col md:flex-row px-[15px] md:px-0 gap-[20px] md:gap-[0]'>
            <div className='basis-[24%] h-full w-full flex justify-start items-start flex-col gap-[15px]'>
              <h5 className='font-[600] text-white text-[1.6rem]'>Company</h5>
              <ul className='h-[80%] w-full flex justify-start items-start flex-col gap-[10px]'>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/about-us'}>About Us</Link>
                </li>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/invest'}>Investment Strategies</Link>
                </li>
                {/* <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/invest/#digital'}>Digital Platform</Link>
                </li> */}
              </ul>
            </div>
            <div className='basis-[24%] h-full w-full flex justify-start items-start flex-col gap-[15px]'>
              <h5 className='font-[600] text-white text-[1.6rem]'>Insights</h5>
              <ul className='h-[80%] w-full flex justify-start items-start flex-col gap-[10px]'>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/insights'}>Market Overview</Link>
                </li>
                {/* <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/insights'}>Economy</Link>
                </li>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/insights'}>Themes</Link>
                </li>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/insights'}>Newsletter</Link>
                </li> */}
              </ul>
            </div>
            <div className='basis-[24%] h-full w-full flex justify-start items-start flex-col gap-[15px]'>
              <h5 className='font-[600] text-white text-[1.6rem]'>Legal</h5>
              <ul className='h-[80%] w-full flex justify-start items-start flex-col gap-[10px]'>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/privacy'}>Terms</Link>
                  
                </li>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  
                  <Link className='text-[1.3rem] font-[400]' to={'/disclosure'}>SDFR disclosures (EU)</Link>
                  
                </li>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/disclaimer'}>Disclaimer</Link>
                </li>

                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/imprint'}>Imprint</Link>
                </li>

                 <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/privacy-statement'}>Privacy Statement (EU)</Link>
                </li>

                 <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]' to={'/cookies'}>Cookie Policy (EU)</Link>
                </li>
                {/* <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]'>Risk Disclosures</Link>
                </li> */}
                {/* <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <Link className='text-[1.3rem] font-[400]'>Regulatory Information</Link>
                </li> */}
              </ul>
            </div>
            <div className='basis-[24%] h-full w-full flex justify-start items-start flex-col gap-[15px]'>
              <h5 className='font-[600] text-white text-[1.6rem]'>Contact</h5>
              <ul className='h-[80%] w-full flex justify-start items-start flex-col gap-[10px]'>
                <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <a className='text-[1.3rem] font-[400]' href="mailto:info@foinikasinvest.com">info@foinikasinvest.com</a>
                </li>
                {/* <li className='text-[1rem] font-[600] text-white hover:text-[#808080]'>
                  <a className='text-[1.3rem] font-[400]' href="tel:+35621234567">+356 2123 4567</a>
                </li> */}

              </ul>
            </div>
          </div>
          <div className='h-[1px] w-full bg-white my-[20px] md:my-[0]'></div>
          {/* <div className='basis-[52%] h-full w-full flex justify-evenly items-center md:items-start flex-col px-[20px] md:px-[0]'>
            <p className='font-[400] text-[0.9rem] text-[#d9d9d9]'>For a €250,000 portfolio with ten €25,000 trades annually, portfolios managed on IBKR's platform may reduce total trading-related costs by up to 1.5% per year, or as much as 98% compared to traditional banks. This is based on three core components:</p>
            <div className='h-auto w-full'>
              <p className='font-[400] text-[0.9rem] text-[#d9d9d9]'>(1) Commissions: IBKR charges €0.50–€3.75 per trade (as low as 0.0035 EUR/share) versus €25–€50 at banks like BNP Paribas, Credit Suisse, or Deutsche Bank—yielding up to 98% lower trading fees;</p>
              <p className='font-[400] text-[0.9rem] text-[#d9d9d9]'>(2) Price Impact: IBKR's smart routing reduces estimated slippage to ~0.02% vs ~0.10% at traditional providers;</p>
              <p className='font-[400] text-[0.9rem] text-[#d9d9d9]'>(3) Custody Fees: IBKR charges zero custody fees on standard portfolios, whereas private banks typically charge 0.20%–0.30% annually.</p>

            </div>
            <p className='font-[400] text-[0.9rem] text-[#d9d9d9]'>Combined, these factors lead to total savings of up to €3,750 per year on a €250,000 portfolio.</p>
            <div className='w-full h-auto'>
            <p className='font-[600] text-[1rem] text-[#d9d9d9]'>Sources</p>
            <ul className='ml-[30px]'>
              <li style={{listStyleType:"disc"}} className='font-[400] text-[0.9rem] text-[#d9d9d9]'>Interactive Brokers Commission Pricing (Europe)</li>
              <li style={{listStyleType:"disc"}} className='font-[400] text-[0.9rem] text-[#d9d9d9]'>Interactive Brokers Execution Quality</li>
              <li style={{listStyleType:"disc"}} className='font-[400] text-[0.9rem] text-[#d9d9d9]'>BNP Paribas WM, Credit Suisse PB, Deutsche Bank Wealth Mgmt (fee schedules, 2023–24)</li>
              <li style={{listStyleType:"disc"}} className='font-[400] text-[0.9rem] text-[#d9d9d9]'>NerdWallet EU Brokerage Comparison (2023–24)</li>
            </ul>
            </div>
            <p className='font-[400] text-[0.9rem] text-[#d9d9d9]'> <span className='font-[600] text-[1rem]'>Disclaimer:</span>  These are best-estimate calculations based on publicly available information as of 2024. Costs may vary depending on account structure, portfolio activity, and negotiated fees. This illustration is not a guarantee of future savings or investment performance. Investors should always consult a qualified advisor.</p>
          </div> */}
          {/* <div className='h-[1px] w-full bg-white my-[20px] md:my-[0]'></div> */}
          <div className='basis-[15%] h-full w-full flex justify-between items-center flex-col md:flex-row '>
            <div className='basis-[30%] h-full w-full overflow-hidden flex justify-start items-center'
            >
              <Link to={"/"} className='h-[100%] overflow-hidden mt-[40px] mobilecare'>
                <img src={Logo} className='h-[85px]' alt="" />

              </Link>
            </div>
            <div className='basis-[60%] h-full w-full flex justify-between items-center mt-[20px] flex-col md:flex-row gap-[15px] md:gap-[0]'>
              <p className='font-[400] text-[1.3rem] text-[#d9d9d9] text-center'>© 2024 Foinikas Wealth Management Ltd. All rights reserved</p>
              <p className='font-[400] text-[1.3rem] text-[#d9d9d9]'>Licensed by MFSA | IBIE Custody</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
