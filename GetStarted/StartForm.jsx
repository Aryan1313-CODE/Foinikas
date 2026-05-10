import React, { useState } from 'react'

const StartForm = () => {
    const [isFocused, setIsFocused] = useState(null);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="flex justify-evenly items-center flex-col w-full h-full">
            <div className="relative w-full" >
                <input
                    type="text"
                    id="fullName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setIsFocused("name")}
                    onBlur={() => setIsFocused(false)}
                    className="form-input peer w-full  focus:outline-none focus:border-blue-500"
                />
                <label
                    htmlFor="fullName"
                    className={`
                        absolute left-3 top-[1] text-gray-500 text-sm transition-all transistion-[1s]
                        ${isFocused === "name" || name ? 'text-[16px] top-[-25px] text-white' : 'top-4 text-gray-400'}
                    `}
                >
                    Full Name
                </label>
            </div>
            <div className="relative w-full" >
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
                        absolute left-3 top-2 text-gray-500 text-sm transition-all
                        ${isFocused === "email" || email ? 'text-[16px] top-[-25px] text-white' : 'top-4 text-gray-400'}
                    `}
                >
                    Email
                </label>
            </div>
            <div className="relative w-full" >
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setIsFocused("password")}
                    onBlur={() => setIsFocused(false)}
                    className="form-input peer w-full  focus:outline-none focus:border-blue-500"
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
            </div>
        </div>
    )
}

export default StartForm
