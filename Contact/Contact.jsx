import React, { useState } from 'react'
import Bg1 from '../../assets/bg1.jpg';
import Plane from '../../assets/plane.png';
import './contact.css'

const Contact = () => {

    const [isFocused, setIsFocused] = useState(null);
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [subject, setSubject] = useState("General Inquiry")
    const [errors, setErrors] = useState({});

    const validateInput = () => {
        let tempErrors = {};

        if (!fname.trim()) {
            tempErrors.fname = "First Name is required";
        } else if (fname.length < 2) {
            tempErrors.fname = "First Name must be at least 2 characters";
        }
        if (!lname.trim()) {
            tempErrors.lname = "Last Name is required";
        } else if (lname.length < 2) {
            tempErrors.fname = "Last Name must be at least 2 characters";
        }

        if (!email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email is invalid";
        }

        if (!contact.trim()) {
            tempErrors.contact = "Contact number is required";
        } else if (contact.length != 10) {
            tempErrors.contact = "Contact Number should be 10 digits";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0; // return true if no errors
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        if (validateInput()) {
            // Perform login/signup action
            alert("Form Submitted Successfully!");
        }
        console.log("CLicked")
    };

    return (
        <div
            className='bg-black h-[950px] w-full flex relative justify-end items-center flex-col gap-[20px] bg-center bg-cover bg-no-repeat'
            style={{ backgroundImage: `url("${Bg1}")` }}
        >
            <div className='h-[90%] w-[90%] flex justify-start items-center flex-col'>
                <h2 className='titleText'>Contact Us</h2>
                <p className='paragraph'>Any question or remarks? Just write us a message!</p>
                <div className='h-[80%] w-full flex justify-center items-center relative'>
                    <div className='h-[550px] flex justify-between px-[50px] items-center overflow-hidden flex-row w-[80%] bg-[rgba(255,255,255,0.1)] z-[1] absolute border border-white rounded-[12px] backdrop-blur-[15px]' style={{ boxShadow: "5px 5px 15px #000" }}>
                        <div className='basis-[39%] h-[80%] w-full bg-[red] rounded-[12px]'
                            style={{
                                background: "linear-gradient(180deg, #51012F 0%, #AF0166 100%)"
                            }}
                        ></div>
                        <div className='basis-[57%] h-[80%] w-full  flex justify-between items-center flex-col'>
                            <div className='basis-[49%] h-full w-full flex justify-evenly items-center flex-col'>
                                <div className='basis-[45%] h-full w-full flex justify-between items-center flex-row'>
                                    <div className='basis-[49%] h-full w-full relative flex justify-center items-start flex-col'>
                                        <input
                                            type="text"
                                            id="fName"
                                            value={fname}
                                            onChange={(e) => setFname(e.target.value)}
                                            onFocus={() => setIsFocused("fname")}
                                            onBlur={() => setIsFocused(false)}
                                            className="form-input peer w-full  focus:outline-none focus:border-blue-500"
                                        />
                                        <label
                                            htmlFor="fName"
                                            className={`
                        absolute left-3 tranform ${errors.fname? "translate-y-[10px]": "translate-y-[23px]"}  text-gray-500 text-sm transition-all transistion-[1s]
                        ${isFocused === "fname" || fname ? 'text-[16px] top-[-25px] text-white' : 'top-4 text-gray-400'}
                    `}
                                        >
                                            First Name
                                        </label>
                                        {errors.fname && <p className="text-red-400 text-sm mt-1">{errors.fname}</p>}
                                    </div>
                                    <div className='basis-[49%] h-full w-full relative flex justify-center items-start flex-col'>
                                        <input
                                            type="text"
                                            id="fName"
                                            value={lname}
                                            onChange={(e) => setLname(e.target.value)}
                                            onFocus={() => setIsFocused("lname")}
                                            onBlur={() => setIsFocused(false)}
                                            className="form-input peer w-full  focus:outline-none focus:border-blue-500"
                                        />
                                        <label
                                            htmlFor="lName"
                                            className={`
                        absolute left-3 tranform ${errors.lname? "translate-y-[10px]": "translate-y-[23px]"}  text-gray-500 text-sm transition-all transistion-[1s]
                        ${isFocused === "lname" || lname ? 'text-[16px] top-[-25px] text-white' : 'top-4 text-gray-400'}
                    `}
                                        >
                                            Last Name
                                        </label>
                                        {errors.lname && <p className="text-red-400 text-sm mt-1">{errors.lname}</p>}
                                    </div>
                                </div>
                                <div className='basis-[45%] h-full w-full flex justify-between items-center flex-row'>
                                    <div className='basis-[49%] h-full w-full relative flex justify-center items-start flex-col'>
                                        <input
                                            type="text"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onFocus={() => setIsFocused("email")}
                                            onBlur={() => setIsFocused(false)}
                                            className="form-input peer w-full  focus:outline-none focus:border-blue-500"
                                        />
                                        <label
                                            htmlFor="email"
                                            className={`
                        absolute left-3 tranform ${errors.email? "translate-y-[10px]": "translate-y-[23px]"}  text-gray-500 text-sm transition-all transistion-[1s]
                        ${isFocused === "email" || email ? 'text-[16px] top-[-25px] text-white' : 'top-4 text-gray-400'}
                    `}
                                        >
                                            Email
                                        </label>
                                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    <div className='basis-[49%] h-full w-full relative flex justify-center items-start flex-col'>
                                        <input
                                            type="text"
                                            id="contact"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            onFocus={() => setIsFocused("contact")}
                                            onBlur={() => setIsFocused(false)}
                                            className="form-input peer w-full  focus:outline-none focus:border-blue-500"
                                        />
                                        <label
                                            htmlFor="contact"
                                            className={`
                        absolute left-3 tranform ${errors.contact? "translate-y-[10px]": "translate-y-[23px]"}  text-gray-500 text-sm transition-all transistion-[1s]
                        ${isFocused === "contact" || contact ? 'text-[16px] top-[-25px] text-white' : 'top-4 text-gray-400'}
                    `}
                                        >
                                            Contact
                                        </label>
                                        {errors.contact && <p className="text-red-400 text-sm mt-1">{errors.contact}</p>}
                                    </div>
                                </div>
                            </div>
                            <div className='basis-[49%] h-full w-full flex justify-between items-start flex-col'>
                                <p className='paragraph'>Select the Subject</p>
                                <ul className='w-full h-[40px] flex justify-start gap-[25px] items-center flex-row'>
                                    <li className='flex justify-center gap-[5px] items-center flex-row cursor-pointer'
                                        onClick={() => { setSubject("General Inquiry") }}
                                    >
                                        {subject != "General Inquiry" && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_566_1715)">
                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_566_1715">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>}

                                        {subject === "General Inquiry" && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_566_1712)">
                                                <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986M22 3.99986L12 14.0099L9.00001 11.0099" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_566_1712">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        }
                                        <p className='text-[12px] font-[500] text-white'>General Inquiry</p>
                                    </li>
                                    <li className='flex justify-center gap-[5px] items-center flex-row cursor-pointer'
                                        onClick={() => { setSubject("Investment Inquiry") }}
                                    >
                                        {subject != "Investment Inquiry" && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_566_1715)">
                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_566_1715">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>}

                                        {subject === "Investment Inquiry" && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_566_1712)">
                                                <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986M22 3.99986L12 14.0099L9.00001 11.0099" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_566_1712">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        }
                                        <p className='text-[12px] font-[500] text-white'>Investment Inquiry</p>
                                    </li>
                                    <li className='flex justify-center gap-[5px] items-center flex-row cursor-pointer'
                                        onClick={() => { setSubject("Financial Advice") }}
                                    >
                                        {subject != "Financial Advice" && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_566_1715)">
                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_566_1715">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>}

                                        {subject === "Financial Advice" && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_566_1712)">
                                                <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986M22 3.99986L12 14.0099L9.00001 11.0099" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_566_1712">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        }
                                        <p className='text-[12px] font-[500] text-white'>Financial Advice</p>
                                    </li>
                                    <li className='flex justify-center gap-[5px] items-center flex-row cursor-pointer'
                                        onClick={() => { setSubject("Others") }}
                                    >
                                        {subject != "Others" && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_566_1715)">
                                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_566_1715">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>}

                                        {subject === "Others" && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_566_1712)">
                                                <path d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986M22 3.99986L12 14.0099L9.00001 11.0099" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_566_1712">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        }
                                        <p className='text-[12px] font-[500] text-white'>Others</p>
                                    </li>
                                </ul>
                                {subject === "Others" && <div className='h-[30px] w-full  flex flex-row justify-start items-center gap-[20px]'>
                                    <lable className="text-[18px] font-[500] text-white">Other</lable>
                                    <input type="text" className='border-b-[2px] text-white border-b-[#fff] w-[300px] focus:outline-none' />
                                </div>}
                               <div className='h-[30px] w-full  flex flex-row justify-start items-center gap-[20px]'>
                                    <lable className="text-[18px] font-[500] text-white">Message</lable>
                                    <input type="text" className='border-b-[2px] text-white border-b-[#fff] w-[300px] focus:outline-none' />
                                </div>

                                <button className='secondary-btn' onClick={()=>{handleSubmit()}}>Submit</button>
                            </div>
                        </div>
                        <img src={Plane} className='h-[80px] absolute z-[2] bottom-[0] right-[10%]'
                            style={{ transform: "rotate(-45deg)" }}
                            alt="" />
                    </div>
                    <div className='h-[350px] w-[350px] absolute z-[0] top-[-5%] right-[0] bg-[red] rounded-[50%]'
                        style={{
                            background: "linear-gradient(211.01deg, #98FFCE 13.41%, #838FFF 54.61%, #60B2FF 91.88%)",
                            animation: "float 8s ease-in-out infinite"
                        }}></div>
                    <div className='h-[120px] w-[120px] absolute z-[0] bottom-[2%] right-[20%] bg-[red] rounded-[50%]'
                        style={{
                            background: "linear-gradient(155.93deg, #FF3BDE 4.53%, #7E69FF 40.73%, #828FF1 53.97%, #8DFFC9 92.82%)",
                            animation: "float2 7s ease-in-out infinite"
                        }}></div>
                    <div className='h-[300px] w-[300px] absolute z-[0] bottom-[-2%] left-[2%] bg-[red] rounded-[50%]'
                        style={{
                            background: "linear-gradient(134.12deg, #98FFCE 12.63%, #5F9FFF 30.23%, #8571FF 65.43%, #3F2FA5 83.03%)",
                            animation: "float3 9s ease-in-out infinite"
                        }}></div>
                    <div className='h-[180px] w-[180px] absolute z-[0] top-[-2%] left-[20%] bg-[red] rounded-[50%]'
                        style={{
                            background: "linear-gradient(155.93deg, #5F9FFF 4.53%, #7E69FF 40.73%, #FE3D41 92.82%)",
                            animation: "float3 9s ease-in-out infinite"
                        }}></div>
                    <div className='h-[120px] w-[120px] absolute z-[0] bottom-[40%] left-[35%] bg-[red] rounded-[50%]'
                        style={{
                            background: "linear-gradient(155.93deg, #5F9FFF 4.53%, #A06CFF 40.73%, #1E00FF 92.82%)",
                            animation: "float 8s ease-in-out infinite"
                        }}></div>
                </div>


            </div>
        </div>
    )
}

export default Contact




