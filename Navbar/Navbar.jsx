import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { color, motion } from 'framer-motion'
import DynamicIsland from './DynamicIsland'
import Logo from '../../assets/newLogo.png'


const Navbar = ({scroll}) => {

  const [active, setActive] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [btnState, setBtnState] = useState("Login")
  const [aboutNav, setAboutNav] = useState("false")
  const location = useLocation()
  const navigate = useNavigate();


  useEffect(() => {
    if (location.pathname === "/login") {
      setActive("")
    } else if (location.pathname === "/") {
      setActive("Home")
    }
    else if (location.pathname === "/contact") {
      setActive("Contact")
    }
  }, [location.pathname])


  const handleLogout = () => {
    // 1. Remove token from localStorage
    localStorage.removeItem("token");
    setBtnState("Log In")

    // 2. (Optional) Clear other stored user data if needed
    // localStorage.removeItem("user");

    // 3. Redirect to login page
    navigate("/login", { replace: true });

  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setBtnState("Log out");
    } else {
      setIsLoggedIn(false);
      setBtnState("Log In");
    }
  }, [location.pathname]);

  useEffect(()=>{
    if(scroll === 0 && location.pathname === '/about-us'){
      console.log("yes")
      setAboutNav(true)
    }else{
      setAboutNav(false)
    }
  },[scroll, location.pathname])



  const options = [{ item: "About", path: "/about-us" }, {item: "Invest", path:"/invest"},{ item: "Insights", path: "/insights" }]
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='w-full h-[75px] hidden md:flex justify-center items-center fixed z-[999] top-[0] bg-white'
      // style={{background: "linear-gradient(to bottom, #ffffff, #4A003C)"}}
    >
      {/* <div className={`w-[85%] h-full  hidden md:flex justify-between items-center flex-row overflow-hidden   bg-[rgba(255,255,255,0.2)] rounded-bl-[20px] rounded-br-[20px]  backdrop-blur-[2px]`} */}
      <div className={`w-[85%] h-full  hidden md:flex justify-between items-center flex-row overflow-hidden  `}
      style={{transition:"1"}}
      >
        <Link to={"/"} className='basis-[30%]  h-[100%] w-full hidden md:flex flex-row justify-start ml-[20px]  items-center gap-[10px]'>
          <img src={Logo} className='h-[425px] relative top-[10px]' alt="" />

        </Link>
        <div className='basis-[35%]  h-[85%] w-full hidden md:flex justify-center items-center'>

          <DynamicIsland menu={options} />
        </div>


        <div className='basis-[20%] h-[80%] w-full hidden md:flex items-center justify-end mr-[20px] gap-[20px]'>
          {!isLoggedIn && <Link to={"/login"} state={{ current: "signup" }} className='font-[500] hover:underline ' style={{ transition: "0.5s", color: "rgba(195, 65, 114, 1)" }}>Sign up</Link>}
          {!isLoggedIn && <Link to="/login" state={{ current: "login" }} className='primary-btn flex justify-center items-center flex-row gap-[5px]'>Log In</Link>}
          {isLoggedIn && <button onClick={handleLogout} className='primary-btn flex justify-center items-center'>Logout</button>}
        </div>
      </div>



    </motion.div>
  )
}

export default Navbar
