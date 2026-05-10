import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './hamburger.css'
import BG from '../../assets/bg1.jpg'
import Logo from '../../assets/newLogoFooter.png'
import { color } from "framer-motion";

const Hamburger = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [show, setShow] = useState(false)
    const options = [{ item: "About", path: "/about-us" }, { item: "Insights", path: "/insights" }, { item: "News", path: "/news" }]
    // const [btnState, setBtnState] = useState("Login")

    const location = useLocation()
    const navigate = useNavigate()

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeNav = () => {
        setMenuOpen(false);
    };
    const handleLogout = () => {
        // 1. Remove token from localStorage
        localStorage.removeItem("token");
        // setBtnState("Log In")

        // 2. (Optional) Clear other stored user data if needed
        // localStorage.removeItem("user");

        // 3. Redirect to login page
        navigate("/login", { replace: true });

    };


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);

        } else {
            setIsLoggedIn(false);

        }
    }, [location.pathname]);

    useEffect(() => {
        setMenuOpen(false)
    }, [location])



    const myStyle = {
        position: "fixed",
        top: "75px",
        left: 0,
        width: menuOpen ? "100%" : 0,
        height: "100vh",
        overflowX: "hidden",
        transition: "0.3s",
        backgroundColor: "#fff",
        backgroundImage: `url("${BG}")`,
        zIndex: "999999999",
        // backdropFilter: "blur(20px)"
    };
    return (
        <div className="mobile-container fixed w-full z-[99999] block md:hidden">
            <div className={`bg-white backdrop-blur-[5px] px-[20px] h-[75px] flex justify-center items-center flex-col ${!menuOpen ? "rounded-bl-[24px] rounded-br-[24px]" : ""} `}
                style={{ transition: "0.5s" }}
            >
                <div className="h-full w-full flex justify-center items-center flex-row">
                    <Link to={"/"} className="flex flex-row w-full">
                        {/* <svg width="45" height="31" viewBox="0 0 45 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.486 24.8042L16.1611 19.332L33.2597 39.9353L23.9883 39.869L11.486 24.8042Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M26.4187 10.5977L43.1357 10.5977L15.3877 23.5977L12.3788 17.1753L26.4187 10.5977Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 7.67426L9.82209 0.974449V0H11.2507H23.8365H44.0871V7.67426H17.3789L17.3789 40.5973H10.3789L10.3789 7.67426H9.82209H0Z" fill="white" />
                        </svg>
                        <h2 className='font-[500] text-[40px] text-white fixed left-[75px] top-[8px]'>FONIKAS</h2> */}
                        <img src={Logo} alt=""  className="h-[50px]"/>
                    </Link>

                    <div className=" h-[30px] w-[50px] cursor-pointer relative text-[50px] top-[0%] text-white font-[500]" onClick={toggleMenu}>
                        {!menuOpen && <svg width="35" height="34" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20703 5.6998C3.20703 5.20275 3.71276 4.7998 4.33662 4.7998H21.2773C21.9012 4.7998 22.4069 5.20275 22.4069 5.6998C22.4069 6.19686 21.9012 6.5998 21.2773 6.5998H4.33662C3.71276 6.5998 3.20703 6.19686 3.20703 5.6998Z" fill="#000" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20703 11.9293C3.20703 11.4322 3.71276 11.0293 4.33662 11.0293H21.2773C21.9012 11.0293 22.4069 11.4322 22.4069 11.9293C22.4069 12.4264 21.9012 12.8293 21.2773 12.8293H4.33662C3.71276 12.8293 3.20703 12.4264 3.20703 11.9293Z" fill="#000" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.20703 18.1593C3.20703 17.6622 3.71276 17.2593 4.33662 17.2593H21.2773C21.9012 17.2593 22.4069 17.6622 22.4069 18.1593C22.4069 18.6563 21.9012 19.0593 21.2773 19.0593H4.33662C3.71276 19.0593 3.20703 18.6563 3.20703 18.1593Z" fill="#000" />
                        </svg>}

                        {menuOpen && <button
                            className="relative transform translate-y-[-25%] right-[0] text-[45px] border-none bg-none color-white"
                            onClick={closeNav}

                        >
                            <ion-icon name="close-outline"
                            style={{ color:"red"}}
                            ></ion-icon>
                        </button>}
                    </div>
                </div>

                {/* <div className="absolute bg-[#000] text-[20px] flex flex-col w-full rounded-bl-[24px] gap-[5px] rounded-br-[24px] px-[20px] py-[10px] " style={{

                    transform: menuOpen ? "translateY(70%)" : "translateY(-300px)", transition: "1s",

                }}>
                    

                    <Link to={"/about-us"}
                        className="border-b-[0.5px] text-white pb-[10px]"
                    >
                        About
                    </Link>
                    <Link to={"/insights"}
                        className="border-b-[0.5px] text-white pb-[10px]"
                    >
                        Insights
                    </Link>
                    <Link to={"/news"}
                        className="border-b-[0.5px] text-white pb-[10px]"
                    >
                        News
                    </Link>
                    {!isLoggedIn && <Link to={"/login"}
                        className="border-b-[0.5px] text-white pb-[10px]"
                        state={{ current: "signup" }}
                    >
                        Sign Up
                    </Link>}
                    {!isLoggedIn && <Link to={"/login"}
                        className=" text-white pb-[10px]"
                        state={{ current: "login" }}
                    >
                        Log In
                    </Link>}
                    {isLoggedIn && <button className=" text-white pb-[10px] cursor-pointer" onClick={handleLogout}> Log Out </button>}
                </div> */}
                <div style={myStyle} className={`bg-cover bg-center ${menuOpen?"p-6":""}`}>
                    <div className="flex justify-start items-start flex-col w-full h-full px-[20px] py-[30px] gap-[20px] bg-[rgba(255,255,255,0.2)] rounded-[12px]">

                        <Link to={"/about-us"}
                            className="border-b-[1px] text-white pb-[10px] w-full text-[24px]"
                        >
                            About
                        </Link>
                        <Link to={"/invest"}
                            className="border-b-[1px] text-white pb-[10px] w-full text-[24px]"
                        >
                            Invest
                        </Link>
                        <Link to={"/insights"}
                            className="border-b-[1px] text-white pb-[10px] w-full text-[24px]"
                        >
                            Insights
                        </Link>

                        
                        
                        {!isLoggedIn && <Link to={"/login"}
                            className="border-b-[1px] text-white pb-[10px] w-full text-[24px]"
                            state={{ current: "signup" }}
                        >
                            Sign Up
                        </Link>}
                        {!isLoggedIn && <Link to={"/login"}
                            className="border-b-[1px] text-white pb-[10px] w-full text-[24px]"
                            state={{ current: "login" }}
                        >
                            Log In
                        </Link>}
                        {isLoggedIn && <button className="border-b-[1px] text-left text-white pb-[10px] cursor-pointer w-full text-[24px]" onClick={handleLogout}> Log Out </button>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hamburger
