// import React from 'react'
// import Bg from '../../assets/bg1Flip.jpg'
// import { Link } from 'react-router-dom'
// import StartForm from './StartForm'
// import Google from '../../assets/google.webp'

// const GetStarted = () => {
//   return (
//     <div className='h-[100vh] w-full bg-cover bg-center flex justify-center items-center flex-col' style={{ backgroundImage: `url("${Bg}")` }}>
//       <h2 className='secondaryTitle text-white'>Get Started with Foinikas</h2>
//       <p className='paragraph'>Join thousands of investors who Trust us with their Financial Future</p>
//       <div className='h-[65%] w-[90%]  mt-[30px] flex justify-between items-center flex-row'>
//         <div className='basis-[40%] h-full w-full bg-[#66023C80] flex justify-evenly items-start flex-col shadow-lg rounded-[12px] px-[40px] py-[25px]'>
//           <h4 className='tertiaryTitle text-white'>Get Started with an institutional grade investment portfolio</h4>
//           <ul className='h-[55%] w-full flex justify-evenly flex-col'>
//             <li className='paragraph flex flex-row items-center gap-[15px]'>
//               <svg className='min-h-[30px] min-w-[30px]' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="30" height="30" rx="15" fill="#CC0478" />
//                 <path d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM20.7375 9.475L12.5 17.7125L9.2625 14.4875L7.5 16.25L12.5 21.25L22.5 11.25L20.7375 9.475Z" fill="white" />
//               </svg>
//               Sign up in minutes


//             </li>

//             <li className='paragraph flex flex-row items-center gap-[15px]'>
//               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="30" height="30" rx="15" fill="#CC0478" />
//                 <path d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM20.7375 9.475L12.5 17.7125L9.2625 14.4875L7.5 16.25L12.5 21.25L22.5 11.25L20.7375 9.475Z" fill="white" />
//               </svg>
//               View exclusive investment strategies


//             </li>
//             <li className='paragraph flex flex-row items-center gap-[15px]'>
//               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="30" height="30" rx="15" fill="#CC0478" />
//                 <path d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM20.7375 9.475L12.5 17.7125L9.2625 14.4875L7.5 16.25L12.5 21.25L22.5 11.25L20.7375 9.475Z" fill="white" />
//               </svg>
//               Invest with multiple currencies


//             </li>
//             <li className='paragraph flex flex-row items-start gap-[15px]'>
//               <svg className='min-h-[30px] min-w-[30px]' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="30" height="30" rx="15" fill="#CC0478" />
//                 <path d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM20.7375 9.475L12.5 17.7125L9.2625 14.4875L7.5 16.25L12.5 21.25L22.5 11.25L20.7375 9.475Z" fill="white" />
//               </svg>
//               Benefit from secure and segregated custody on one of the world’s leading and fastest-growing investment platforms


//             </li>
//             <li className='paragraph flex flex-row items-center gap-[15px]'>
//               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="30" height="30" rx="15" fill="#CC0478" />
//                 <path d="M15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5ZM15 25C9.4875 25 5 20.5125 5 15C5 9.4875 9.4875 5 15 5C20.5125 5 25 9.4875 25 15C25 20.5125 20.5125 25 15 25ZM20.7375 9.475L12.5 17.7125L9.2625 14.4875L7.5 16.25L12.5 21.25L22.5 11.25L20.7375 9.475Z" fill="white" />
//               </svg>
//               Control your portfolio


//             </li>

//           </ul>
//           <div className='h-[20%] w-full flex flex-col gap-[10px] justify-center'>
//             <h5 className='paragraph'>How can Foinikas help you?</h5>
//             <Link to={"/contact"} className="secondary-btn flex justify-center items-center">Contact Us</Link>
//           </div>
//         </div>
//         <div className='basis-[58%] h-full w-full bg-[#D9D9D933] px-[40px] py-[25px] shadow-lg rounded-[12px] flex justify-start items-center flex-col'>
//           <h3 className='text-[36px] font-[400] text-white ' style={{ fontFamily: "Inter", textShadow: "2px 2px 5px #000" }}>Create your account</h3>
//           <div className='h-[60%] w-[80%]'>
//             <StartForm />
//           </div>
//           <p className='paragraph'>Already have an Account ? <span><Link to={"/login"} className='text-[#55002E] font-[700] text-[16px]'>Login In</Link></span></p>
//           <div className='h-[30%] w-full flex justify-center items-center flex-col'>
//             <p className='text-white text-[14px]'>Or</p>
//             <p className='paragraph'>Sign up Using Google</p>
//             <div className='h-[45px] w-[45px] mt-[20px] bg-white flex justify-center items-center rounded-[12px] cursor-pointer' style={{boxShadow:"2px 5px 5px #000"}}>
//               <img src={Google} alt="" className='h-[80%] w-[80%] object-containt'/>
//             </div>

//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default GetStarted

import React from 'react'

const GetStarted = () => {
  return (
    <div>
      
    </div>
  )
}

export default GetStarted

