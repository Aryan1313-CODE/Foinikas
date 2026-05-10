import axios from 'axios';
import React, { useState } from 'react';

const ForgotModal = ({ setShow }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [disable, setDisable] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const BASE_URL_AUTH_RENDER = "https://foinikas-backend-1.onrender.com/api/pass"
    const localhost_URL = "http://localhost:5001/api/pass"

    const validate = () => {
        if (!email.trim()) {
            setError("Email is required");
            return false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError("Invalid email format");
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async () => {
        if (!validate()) return;
        setDisable(true);
        try {
            const response = await axios.post(`${BASE_URL_AUTH_RENDER}/forgot-password`, {
                email,
            });
            setSuccess("Reset link sent to your email.");
            setError('');
            setShowPopup(true);  // Show confirmation pop-up
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
            setSuccess('');
        } finally {
            setDisable(false);
        }
    };

    return (
        <>
            {/* Modal */}
            <div className='h-[70%] sm:h-[60%] md:h-[50%] lg:h-[40%] xl:h-[30%] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] xl:w-[30%] bg-[#66023C] rounded-[12px] flex justify-center items-center flex-col gap-[20px] relative mt-40 sm:mt-36 md:mt-32 lg:mt-28 xl:mt-0 mb-40 sm:mb-36 md:mb-32 lg:mb-28 xl:mb-0 py-8'>
                <p
                    className='bg-[white] px-[5px] rounded-[3px] text-[#66023C] absolute top-[10px] right-[30px] cursor-pointer'
                    onClick={() => setShow(false)}
                >
                    Close
                </p>
                <h3 className='tertiaryTitle text-white'>Forgot your password?</h3>
                <div className='h-[30%] w-[57%]'>
                    <label className='form-label text-white'>Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder='Email'
                        className='w-full py-2 px-3 bg-white border-[1px] rounded-md border-gray-300'
                        value={email}
                        disabled={disable}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
                </div>
                <button
                    className='home-btn cursor-pointer flex items-center justify-center gap-2'
                    onClick={handleSubmit}
                    disabled={disable}
                >
                    {disable ? (
                        "...Loading"
                    ) : 'Send Reset Link'}
                </button>
            </div>

            {/* Confirmation Pop-up */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-center max-w-sm">
                        <h3 className="text-xl font-semibold mb-2 text-green-600">Check Your Email!</h3>
                        <p className="text-gray-700 mb-4">We’ve sent a password reset link to your email address.</p>
                        <button
                            className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700 transition"
                            onClick={() => {
                                setShowPopup(false);
                                setShow(false);
                            }}
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ForgotModal;
