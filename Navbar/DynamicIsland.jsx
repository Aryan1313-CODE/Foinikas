import React, { useEffect, useRef, useState } from 'react';
import './island.css';
import Down from '../../assets/down.svg'
import { Link, useLocation } from 'react-router-dom';

const DynamicIsland = ({ menu }) => {
    const [active, setActive] = useState("");
    const [showDropDown, setShowDropDown] = useState(false)
    const location = useLocation();

    const islandContainerRef = useRef(null);
    const navLinksRef = useRef(null);
    const progressCircleRef = useRef(null);
    const progressFillRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    useEffect(() => {
        if (location.pathname === "/login") setActive("");
        else if (location.pathname === "/") setActive("Home");
        else if (location.pathname === "/contact") setActive("Contact");
    }, [location.pathname]);

    useEffect(() => {
        const progressCircle = progressCircleRef.current;
        const islandContainer = islandContainerRef.current;
        const navLinks = navLinksRef.current;
        const progressFill = progressFillRef.current;
        let scrollTimeout;
        let animationFrame;
        let lastScrollTop = 0;

        if (!progressCircle) return;

        const radius = progressCircle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;

        const updateProgress = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = scrollTop / scrollHeight;
            const offset = circumference - scrollProgress * circumference;

            if (Math.abs(scrollTop - lastScrollTop) > 1) {
                progressCircle.style.strokeDashoffset = offset;
                lastScrollTop = scrollTop;
            }

            animationFrame = requestAnimationFrame(updateProgress);
        };

        updateProgress();

        const onScroll = () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                cancelAnimationFrame(animationFrame);
                updateProgress();
            }, 100);

            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (window.scrollY / totalHeight) * 100;
            if (progressFill) progressFill.style.width = `${scrollPercentage}%`;
        };

        window.addEventListener('scroll', onScroll);

        // if (islandContainer && navLinks) {
        //     islandContainer.addEventListener('mouseenter', () => {
        //         islandContainer.style.padding = '8px 24px';
        //         navLinks.style.opacity = '1';
        //         navLinks.style.width = 'auto';
        //     });

        //     islandContainer.addEventListener('mouseleave', () => {
        //         islandContainer.style.padding = '8px 16px';
        //         navLinks.style.opacity = '0';
        //         navLinks.style.width = '0';
        //     });
        // }

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <div className="dynamic-island">
            <div className="island-container relative" ref={islandContainerRef}>
                <div
  className="island-content"
  style={{
    width: "150px",
    transition: "width 0.3s ease"
  }}
  onMouseEnter={e => {e.currentTarget.style.width = "300px"; setHovered(true)}}
  onMouseLeave={e => {e.currentTarget.style.width = "150px"; setHovered(false)}}
>

                    <div className="nav-links flex flex-row justify-center " ref={navLinksRef}>
                        {menu.map((item, index) => (
                            <Link
                                to={item.path}
                                key={index}
                                onClick={() => setActive(item.item)}
                                style={{ transition: '0.5s' }}
                                onMouseEnter={() => item.item === "Invest" && setShowDropDown(true)}
                                onMouseLeave={() => item.item === "Invest" && setShowDropDown(false)}
                                className={`menu-item text-white py-[10px] my-[2px] px-[5px] cursor-pointer hover:bg-[rgba(0,0,0,0.5)] rounded-[6px] ${active === item.item ? 'bg-black' : ''
                                    }  
                                    
                                    `}
                            >
                                {item.item}
                                {/* {item.item === "Invest" && <div className='absolute top-[40%] right-[15%] menu-icon'>
                                    <svg fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        width="12" height="12" viewBox="0 0 30.727 30.727"
                                        xml:space="preserve">
                                        <g>
                                            <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
		l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/>
                                        </g>
                                    </svg>

                                </div>} */}
                            </Link>
                        ))}


                    </div>
                    <div className="progress-circle">
  <svg
  className="progress-ring"
  width="22"
  height="22"
  style={{
    marginLeft: hovered ? "60px" : "130px",
    transition: "margin-left 0.3s ease"
  }}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
    <circle cx="11" cy="11" r="9" className="progress-ring-circle-bg" />
    <circle
      cx="11"
      cy="11"
      r="9"
      className="progress-ring-circle"
      ref={progressCircleRef}
    />
  </svg>
</div>



                </div>
                

            </div>
            {/* <div className={`absolute h-[100px] rounded-br-[12px] rounded-bl-[12px] w-[150px] bg-[red] left-[25%] z-[9999] invest-drop-down transition-all duration-300 ${showDropDown ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}></div> */}

        </div>
    );
};

export default DynamicIsland;
