import React from 'react';
import { Link } from 'react-router-dom';
import './partners.css';

import Pcta1 from './Family2.png';
import Pcta2 from './career.png';
import Pcta3 from './education2.png';
import Pcta4 from './retirement.png';

const PartnersCTA = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      {/* Top Text Section */}
      <div className="basis-[28%] md:basis-[37%] h-full w-full flex flex-col justify-center items-center text-center gap-[15px] px-4">
        <h2
          className="titleText text-center"
          style={{ fontFamily: 'Satoshi' }}
        >
          Make Your Money Echo Through Life
        </h2>
        <p
          className="paragraph text-center md:w-[70%] hidden md:block"
          style={{ fontSize: '1.3rem' }}
        >
          Vacation keys, university caps, carefree retirements—whatever milestone
          is on the horizon, we blend human guidance with forward-thinking tools
          to amplify every financial ripple.
        </p>
        <p
          className="paragraph text-center md:w-[70%] block md:hidden"
          style={{ fontSize: '1rem' }}
        >
          Vacation keys, university caps, carefree retirements—whatever milestone
          is on the horizon, we blend human guidance with forward-thinking tools
          to amplify every financial ripple.
        </p>
        <Link
          to="/book"
          className="secondary-btn flex justify-center items-center mt-2"
        >
          Let's Talk
        </Link>
      </div>

      {/* Cards Section */}
      <div className="basis-[70%] md:basis-[60%] h-full w-full md:bg-[rgba(255,255,255,0.3)] md:backdrop-blur-[5px] rounded-[12px] flex flex-col md:flex-row justify-evenly items-center gap-[20px] md:gap-0 mt-[20px]">
        {[ 
          { img: Pcta1, label: 'Family', position: 'bg-top' },
          { img: Pcta2, label: 'Career', position: 'bg-center' },
          { img: Pcta3, label: 'Education', position: 'bg-center' },
          { img: Pcta4, label: 'Retirement', position: 'bg-center' },
        ].map((card, i) => (
          <div
            key={i}
            className="basis-[23%] pcta-card w-[85%] md:w-full h-[250px] md:h-[85%] rounded-[12px] relative overflow-hidden flex justify-center items-center"
          >
            <div
              className={`h-full w-full bg-cover ${card.position} pcta-card-img`}
              style={{ backgroundImage: `url('${card.img}')` }}
            >
              <div
                className="h-full w-full"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0) 65%, rgba(0,0,0,0.9))',
                }}
              ></div>
            </div>
            <p
              className="absolute z-[1] font-[700] text-[1.125rem] bottom-[20px] left-[20px] text-white"
              style={{ fontFamily: 'Satoshi' }}
            >
              {card.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersCTA;
