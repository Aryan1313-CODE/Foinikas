import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import Bg from '../../assets/bg1Flip.jpg'
import './login.css'
import SmallLoader from '../Loading/SmallLoader';

const BASE_URL_AUTH_RENDER = "https://foinikas-backend-1.onrender.com/api/auth"
const localhost_URL = "http://localhost:5001/api/auth"

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/insights";
    const current = location.state?.current || ""

    const [show, setShow] = useState("login")
    const [isFocused, setIsFocused] = useState(null);

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")


    const [email, setEmail] = useState("")
    const [newName, setNewName] = useState("")
    const [newPass, setNewPass] = useState("")

    const [errors, setErrors] = useState({});

    const [logLoading, setLogLoading] = useState(false);
    const [signLoading, setSignLoading] = useState(false);


    useEffect(()=>{
        if(current === "signup"){
            setShow("signup")
        }else if(current === "login"){
            setShow("login")
        }
    },[current])



    const validateInputsLogin = () => {
        let tempErrors = {};

        if (!name.trim()) {
            tempErrors.name = "Name is required";
        } else if (name.length < 2) {
            tempErrors.name = "Name must be at least 2 characters";
        }
        if (!password.trim()) {
            tempErrors.password = "Password is required";
        } else if (password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0; // return true if no errors
    };

    const validateInputsSignup = () => {
        let tempErrors = {};

        if (!newName.trim()) {
            tempErrors.newName = "Name is required";
        } else if (newName.length < 2) {
            tempErrors.newName = "Name must be at least 2 characters";
        }

        if (!email.trim()) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email is invalid";
        }

        if (!newPass.trim()) {
            tempErrors.newPass = "Password is required";
        } else if (newPass.length < 6) {
            tempErrors.newPass = "Password must be at least 6 characters";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0; // return true if no errors
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (validateInputsLogin()) {
            setLogLoading(true);
            try {
                const response = await axios.post(`${BASE_URL_AUTH_RENDER}/login`, {
                    username: name,
                    password
                });

                const { token, user } = response.data;
                if (response.status === 200) {
                    localStorage.setItem("token", token);
                    // alert("Login successful!");
                    navigate(from, { replace: true });
                    // Optionally store token or redirect
                    // localStorage.setItem("token", response.data.token);
                    // navigate("/dashboard");
                }
            } catch (error) {
                console.error(error);
                alert(error.response?.data?.message || "Login failed");
            }finally{
                setLogLoading(false);
            }
        }
    };


    const handleSignup = async (e) => {
        e.preventDefault();
        if (validateInputsSignup()) {
            setSignLoading(true);
            try {
                const response = await axios.post(`${BASE_URL_AUTH_RENDER}/signup`, {
                    name: newName,
                    email,
                    password: newPass
                });
                const { token, user } = response.data;

                if (response.status === 201) {
                    localStorage.setItem("token", token);
                    // alert("Registration successful");
                    navigate(from, { replace: true });

                    // setShow("login");
                }
            } catch (error) {
                console.error(error);
                alert(error.response?.data?.message || "Registration failed");
            }finally{
                setSignLoading(false);
            }
        }
    };


    return (
        <div className='h-[110vh] w-full bg-cover bg-center flex justify-center items-center flex-row' style={{ backgroundImage: `url("${Bg}")` }}>
            {/* <div className='basis-[50%] h-full w-full relative'>
                <img src={Hand} alt="" className='absolute bottom-[10%] float-animation'/>
            </div> */}
            <div className='basis-[100%] md:basis-[50%] h-full w-full flex justify-center items-center'>
                <div className={`h-[70%] w-[80%] md:w-[65%]  ${show === "login" ? "bg-[rgba(0,0,0,0.3)]" : "bg-white"} overflow-hidden rounded-[12px]`} style={{ boxShadow: "2px 5px 5px #000", transition: "all 0.8s ease" }}>

                    {/* LOGIN FORM */}
                    <div className={`h-[85%] w-full relative flex justify-center  items-center gap-[30px] backdrop-blur-[5px] flex-col ${show === "login" ? "bg-[rgba(0,0,0,0.01)]" : "bg-black"}`}
                        style={{
                            transform: `${show === "login" ? "translateY(0)" : "translateY(-80%)"}`, transition: "all 0.8s ease",
                            borderRadius: `${show === "login" ? "0" : "50px"}`
                        }}>

                        <h3 className='tertiaryTitle text-white'>Login</h3>
                        <p className='text-[14px] font-[500] text-white absolute bottom-[60px]'
                            style={{
                                transition: "all 0.6s ease", transform: `${show === "login" ? "translateY(-150%)" : "translateY(0%)"}`,
                                opacity: `${show === "login" ? "0" : "1"}`
                            }}
                        >Already on board?</p>
                        <p className='text-white text-[14px] absolute top-[15%]'>Good to see you again!</p>
                        <button className='secondary-btn absolute bottom-[10px] cursor-pointer'
                            style={{
                                transition: "all 0.6s ease", transform: `${show === "login" ? "translateY(-150%)" : "translateY(0%)"}`,
                                opacity: `${show === "login" ? "0" : "1"}`
                            }}
                            onClick={() => { setShow("login") }}
                        >Login</button>

                        <form className='h-[48%] w-[65%] flex justify-center items-center gap-[20px] flex-col' onSubmit={handleLogin}>
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onFocus={() => setIsFocused("name")}
                                    onBlur={() => setIsFocused(false)}
                                    className="form-input peer w-full focus:outline-none focus:border-blue-500"
                                />
                                <label
                                    htmlFor="name"
                                    className={`
                absolute left-3 top-2 text-gray-500 text-sm transition-all
                ${isFocused === "name" || name ? 'text-[16px] top-[-25px] text-white' : 'top-4 text-gray-400'}
            `}
                                >
                                    Name
                                </label>
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div className="relative w-full mt-[20px]">
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => setIsFocused("password")}
                                    onBlur={() => setIsFocused(false)}
                                    className="form-input peer w-full focus:outline-none focus:border-blue-500"
                                />
                                <label
                                    htmlFor="password"
                                    className={`
                absolute left-3 top-2 text-gray-500 text-sm transition-all
                ${isFocused === "password" || password ? 'text-[16px] top-[-25px] text-white' : 'top-4 text-gray-400'}
            `}
                                >
                                    Password
                                </label>
                                {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                            </div>

                            {!logLoading && <button className='secondary-btn' type="submit">

                                Go!
                                

                            </button>}
                            {logLoading && <SmallLoader/>}
                        </form>
                    </div>

                    {/* SIGNUP FORM */}
                    <div className='h-[80%] w-full bg-white flex justify-start items-center flex-col'
                        style={{
                            transform: `${show === "login" ? "translateY(0)" : "translateY(-80%)"}`, transition: "all 0.8s ease",
                            borderTopLeftRadius: `${show === "login" ? "50px" : "0px"}`,
                            borderTopRightRadius: `${show === "login" ? "50px" : "0px"}`
                        }}
                    >
                        <p className='mt-[10px]' style={{ transition: "all 0.6 ease", opacity: `${show === "signup" ? "0" : "1"}` }}>Hop on board?</p>
                        <button className={`primary-btn ${show === "login" ? "cursor-pointer" : ""}`}
                            style={{
                                transition: "all 0.6s ease", transform: `${show === "login" ? "translateY(10%)" : "translateY(-50%)"}`,
                                opacity: `${show === "login" ? "1" : "0"}`
                            }}
                            onClick={() => { setShow("signup") }}
                        >Sign up</button>
                        <p className='text-[#620035] text-[14px] absolute top-[2%]'
                            style={{
                                opacity: `${show === "login" ? "0" : "1"}`
                            }}
                        >Let’s get started!</p>
                        <h3 className='tertiaryTitle text-[#C34172]'
                            style={{
                                opacity: `${show === "login" ? "0" : "1"}`,
                                transform: `${show === "login" ? "translateY(0)" : "translateY(-175%)"}`
                            }}
                        >Sign up</h3>

                        <form className='h-[48%] w-[65%] flex justify-center items-center gap-[20px] flex-col'
                            style={{ transition: "all 1s ease", transform: `${show === "login" ? "translateY(50%)" : "translateY(0)"}` }}
                            onSubmit={handleSignup}
                        >
                            <div className="relative w-full">
                                <input
                                    type="text"
                                    id="name-signup"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                    onFocus={() => setIsFocused("name")}
                                    onBlur={() => setIsFocused(false)}
                                    className="form-input peer w-full focus:outline-none focus:border-blue-500"
                                    style={{ boxShadow: "2px 2px 10px #d9d9d9" }}
                                />
                                <label
                                    htmlFor="name-signup"
                                    className={`
                absolute left-3 top-2 text-gray-500 text-sm transition-all
                ${isFocused === "name" || newName ? 'text-[16px] top-[-25px] text-[#C34172]' : 'top-4 text-gray-400'}
            `}
                                >
                                    Name
                                </label>
                                {errors.newName && <p className="text-red-400 text-sm mt-1">{errors.newName}</p>}
                            </div>

                            <div className="relative w-full mt-[15px]">
                                <input
                                    type="text"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setIsFocused("email")}
                                    onBlur={() => setIsFocused(false)}
                                    className="form-input peer w-full focus:outline-none focus:border-blue-500"
                                    style={{ boxShadow: "2px 2px 10px #d9d9d9" }}
                                />
                                <label
                                    htmlFor="email"
                                    className={`
                absolute left-3 top-2 text-gray-500 text-sm transition-all
                ${isFocused === "email" || email ? 'text-[16px] top-[-25px] text-[#C34172]' : 'top-4 text-gray-400'}
            `}
                                >
                                    Email
                                </label>
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div className="relative w-full mt-[15px]">
                                <input
                                    type="password"
                                    id="password-signup"
                                    value={newPass}
                                    onChange={(e) => setNewPass(e.target.value)}
                                    onFocus={() => setIsFocused("password")}
                                    onBlur={() => setIsFocused(false)}
                                    className="form-input peer w-full focus:outline-none focus:border-blue-500"
                                    style={{ boxShadow: "2px 2px 10px #d9d9d9" }}
                                />
                                <label
                                    htmlFor="password-signup"
                                    className={`
                absolute left-3 top-2 text-gray-500 text-sm transition-all
                ${isFocused === "password" || newPass ? 'text-[16px] top-[-25px] text-[#C34172]' : 'top-4 text-gray-400'}
            `}
                                >
                                    Password
                                </label>
                                {errors.newPass && <p className="text-red-400 text-sm mt-1">{errors.newPass}</p>}
                            </div>

                            {!signLoading && <button className='primary-btn absolute bottom-[-65px]' type="submit">Go!</button>}
                             {signLoading && <SmallLoader/>}
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
