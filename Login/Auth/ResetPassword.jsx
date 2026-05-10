import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Bg from '../../../assets/bg1Flip.jpg';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [disable, setDisable] = useState(false);
    const { token } = useParams();

    const BASE_URL_AUTH_RENDER = "https://foinikas-backend-1.onrender.com/api/auth"
    const localhost_URL = "http://localhost:5001/api/auth"

    const validatePassword = (pwd) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(pwd);
    };

    const canSubmit =
        password &&
        confirm &&
        password === confirm &&
        validatePassword(password) &&
        !disable;

    const handleSubmit = async () => {
        if (!canSubmit) return;

        setError('');
        setSuccess('');
        setDisable(true);

        try {
            const response = await axios.put(`${BASE_URL_AUTH_RENDER}/reset-pass/${token}`, {
                password,
            });

            setSuccess("Password reset successful!");
        } catch (err) {
            setError(err.response?.data?.message || 'Something went wrong.');
        } finally {
            setDisable(false);
        }
    };

    return (
        <div
            className='h-[100vh] w-full bg-cover bg-center flex justify-center items-center flex-row'
            style={{ backgroundImage: `url("${Bg}")` }}
        >
            <div className='h-auto py-6 md:h-[auto] w-[80%] md:w-[30%] bg-[#66023C] rounded-[12px] flex justify-center items-center flex-col gap-[20px]'>
                <h3 className='tertiaryTitle text-white'>Reset your password</h3>

                <div className='w-[65%] flex flex-col'>
                    <label className='form-label text-white'>Password</label>
                    <input
                        type="password"
                        placeholder='New Password'
                        className='w-full py-2 px-3 bg-white border-[1px] rounded-md border-gray-300'
                        value={password}
                        disabled={disable}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className='w-[65%] flex flex-col'>
                    <label className='form-label text-white'>Confirm Password</label>
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        className='w-full py-2 px-3 bg-white border-[1px] rounded-md border-gray-300'
                        value={confirm}
                        disabled={disable}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-400 text-sm text-center px-4">{error}</p>}
                {success && <p className="text-green-400 text-sm text-center px-4">{success}</p>}

                <button
                    className='home-btn cursor-pointer flex items-center justify-center gap-2 mt-2'
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                >
                    {disable ? '...Loading' : 'Reset Password'}
                </button>
            </div>
        </div>
    );
};

export default ResetPassword;
