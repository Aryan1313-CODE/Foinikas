import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AuthCard = ({ setShow }) => {

    const location = useLocation();
    const navigate = useNavigate();
const API_BASE_URL = "https://foinikas-backend-1.onrender.com/api/auth";    
const localhost_URL = "http://localhost:5001/api/auth"
    const [mode, setMode] = useState("Signup");
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [logLoading, setLogLoading] = useState(false);
    const [signLoading, setSignLoading] = useState(false);
    const [disable, setDisable] = useState(false)
    const from = location.state?.from?.pathname || "/insights";
    const current = location.state?.current || ""

    useEffect(() => {
        setErrors({});
        setForm({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }, [mode])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};

        if (mode === "Signup") {
            if (!form.firstName.trim()) {
                newErrors.firstName = "First name is required";
            } else if (!/^[A-Za-z]+$/.test(form.firstName)) {
                newErrors.firstName = "First name should contain only letters";
            }

            if (!form.lastName.trim()) {
                newErrors.lastName = "Last name is required";
            } else if (!/^[A-Za-z]+$/.test(form.lastName)) {
                newErrors.lastName = "Last name should contain only letters";
            }
        }

        if (!form.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            newErrors.email = "Invalid email format";
        }

        if (!form.password) {
            newErrors.password = "Password is required";
        } else if (!/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(form.password)) {
            newErrors.password = "Password must be 8+ chars, include a capital, number & special character";
        }

        if (mode === "Signup") {
            if (!form.confirmPassword) {
                newErrors.confirmPassword = "Confirm password is required";
            } else if (form.password !== form.confirmPassword) {
                newErrors.confirmPassword = "Passwords do not match";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };




    const handleLogin = async (e) => {
        e.preventDefault();

        if (validate()) {
            setLogLoading(true);
            setDisable(true)
            try {
                const response = await axios.post(`${API_BASE_URL}/login`, {
                    email: form.email,
                    password: form.password
                });

                const { token, user } = response.data;
                if (response.status === 200) {
                    localStorage.setItem("token", token);
                    alert("Login successful!");
                    navigate(from, { replace: true });
                    // Optionally store token or redirect
                    // localStorage.setItem("token", response.data.token);
                    // navigate("/dashboard");
                    setDisable(false)
                }
            } catch (error) {
                // console.error(error);
                // Extract message safely from error response
                let message = "Login failed";
                if (error.response && error.response.data && error.response.data.message) {
                    message = error.response.data.message;
                }

                alert(message);
                setDisable(false)
            } finally {
                setLogLoading(false);

            }
        }
    };
    const handleSignup = async (e) => {
        e.preventDefault();

        if (validate()) {
            setSignLoading(true);
            setDisable(true)
            try {
                const response = await axios.post(`${API_BASE_URL}/signup`, {
                    firstName: form.firstName,
                    lastName: form.lastName,
                    email: form.email,
                    password: form.password
                });
                const { token, user } = response.data;

                if (response.status === 201) {
                    localStorage.setItem("token", token);
                    alert("Registration successful");
                    navigate(from, { replace: true });
                    setDisable(false)
                    // setShow("login");
                }
            } catch (error) {
                console.error(error.response.data);

                // Extract message safely from error response
                let message = "Login failed";
                if (error.response && error.response.data && error.response.data.message ) {
                    message = error.response.data.message;
                }

                alert(message);
                setDisable(false)
            } finally {
                setSignLoading(false);
            }
        }
    };

    useEffect(() => {
        if (current === "signup") {
            setMode("Signup")
        } else if (current === "login") {
            setMode("Login")
        }
    }, [current])

    return (
        <div className='h-auto w-full bg-[red] bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px] p-[20px] rounded-[12px] flex justify-center items-center flex-col gap-[25px]' style={{ boxShadow: "2px 2px 5px #000" }}>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

            <div className='h-auto w-[90%] bg-[#d9d9d9] flex justify-center items-center flex-row rounded-[6px]'>
                <h5 className={`basis-[50%] cursor-pointer h-full w-full text-[16px] font-[500] flex justify-center items-center py-[10px]  abouttitle ${mode === "Signup" ? "bg-[#66023C] rounded-[6px] text-white" : "text-[#808080] "}`} onClick={() => setMode("Signup")}>Sign up</h5>
                <h5 className={`basis-[50%] cursor-pointer h-full w-full text-[16px] font-[500] flex justify-center items-center py-[10px] abouttitle ${mode === "Login" ? "bg-[#66023C] rounded-[6px] text-white" : "text-[#808080]"}`} onClick={() => setMode("Login")}>Login</h5>
            </div>

            <div className='h-auto w-[90%] flex justify-center items-center flex-col gap-[10px]'>
                {mode === "Signup" && (
                    <div className='w-full flex justify-center items-center flex-row gap-[10px]'>
                        <div className='basis-[50%] h-full w-full flex justify-center items-start flex-col'>
                            <label className='form-label forauthleft'>First Name</label>
                            <input type="text" name="firstName" disabled={disable} value={form.firstName} onChange={handleChange} placeholder='First Name' className='w-full py-2 px-3 bg-white border-[1px] rounded-md border-gray-300 adjustedinput' />
                            {errors.firstName && <p className="text-red-600 text-sm">{errors.firstName}</p>}
                        </div>
                        <div className='basis-[50%] h-full w-full flex justify-center items-start flex-col'>
                            <label className='form-label forauthleft'>Last Name</label>
                            <input type="text" name="lastName" disabled={disable} value={form.lastName} onChange={handleChange} placeholder='Last Name' className='w-full py-2 px-3 bg-white border-[1px] rounded-md border-gray-300 adjustedinput' />
                            {errors.lastName && <p className="text-red-600 text-sm">{errors.lastName}</p>}
                        </div>
                    </div>
                )}

                <div className='w-full flex justify-center items-start flex-col'>
                    <label className='form-label forauthleft'>Email</label>
                    <input type="text" name="email" disabled={disable} value={form.email} onChange={handleChange} placeholder='Email' className='w-full py-2 px-3 bg-white border-[1px] rounded-md border-gray-300 adjustedinput' />
                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                </div>

                <div className='w-full flex justify-center items-start flex-col '>
                    <label className='form-label forauthleft'>Password</label>
                    <input type="password" name="password" disabled={disable} value={form.password} onChange={handleChange} placeholder='Password' className='w-full py-2 px-3 bg-white border-[1px] rounded-md border-gray-300 adjustedinput' />
                    {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                </div>

                {mode === "Signup" && (
                    <div className='w-full flex justify-center items-start flex-col'>
                        <label className='form-label forauthleft'>Confirm Password</label>
                        <input type="password" name="confirmPassword" disabled={disable} value={form.confirmPassword} onChange={handleChange} placeholder='Confirm Password' className='w-full py-2 px-3 bg-white border-[1px] rounded-md border-gray-300 adjustedinput' />
                        {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
                    </div>
                )}
            </div>

            {mode === "Login" && (
                <div className='w-[90%] flex justify-end items-center'>
                    <p className='text-[#66023C] font-[500] text-[18px] hover:underline cursor-pointer abouttitle '
                        onClick={() => { setShow(true) }}
                    >Forgot your password?</p>
                </div>
            )}

            {!disable && <button className='home-btn cursor-pointer adjustedinput abouttitle' disabled={disable} onClick={
                mode === "Signup" ? handleSignup : mode === "Login" ? handleLogin : ""
            }>
                {mode === "Signup" ? "Create Account" : "Login"}
            </button>}

            {disable && <button className='home-btn '>
                Loading
            </button>}

            {mode === "Signup" && (
                <div className='w-[90%] flex justify-center items-center p-3 bg-[rgba(255,255,255,0.5)] rounded-lg border-gray-200 border'>
                    <p className='text-[14px]'>We work with investors starting from <span className='text-[#66023C]'>EUR 200,000</span></p>
                </div>
            )}
        </div>
    );
};

export default AuthCard;
