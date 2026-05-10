import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import InvestLanding from './InvestLanding'
import InvestBelieve from './InvestBelieve'
import DigitalPlatforms from './DigitalPlatforms'
import HorizontalScroll from './Horizontal'
import HoverTiles from '../AboutUs/HoverTiles/HoverTiles'
import Maingraphcomponent from './Maingraphcomponent'

const Invest = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div>
      <InvestLanding />
      <HoverTiles />
      <Maingraphcomponent/>
      <InvestBelieve />
      <DigitalPlatforms />
      <div className='w-full' id='digital'>
        <HorizontalScroll />

      </div>


    </div>
  )
}

export default Invest
