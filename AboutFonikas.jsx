import React from 'react'
import './about.css'
import BG from '../../assets/main12.jpg'
import AfBg1 from '../../assets/afBg1.avif'
import AfBg2 from '../../assets/afBg2.jpg'


const AboutFoinikas = () => {
    return (
        <div className='h-[900px] md:h-[120vh] w-full bg-cover bg-center flex justify-center items-center '
            style={{ backgroundImage: `url("${BG}")` }}
        >
            <div className='h-[80%] w-[90%] flex justify-between items-center flex-col gap-[20px]'>
                {/* <div className='basis-[46%] h-full w-full flex justify-start items-center'>
                    <div className='h-full w-full md:w-[60%] about-card  rounded-[12px] flex justify-between items-center relative'
                        style={{ boxShadow: "2px 2px 5px #000" }}
                    >
                        <div className='md:basis-[70%] h-full w-full px-[25px] md:px-[50px] py-[20px] flex justify-center items-start gap-[20px] flex-col'>
                            <h2 className='titleText'>Why we started Foinikas</h2>
                            <p className='paragraph'>

                                Our founding team spent decades advising entrepreneurs, family offices, and institutional investors at top global institutions. Overtime, we saw a gap: even at the highest levels, innovation was slow, digital tools were outdated, and personalization was limited. We started Foinikas to fix that.

                                We envisioned a firm that blends timeless investing principles with cutting-edge infrastructure—a place where strategy meets simplicity, and where clients don't have to choose between sophistication and accessibility.

                            </p>
                        </div>
                        <div className='hidden md:block h-[90%] w-[70%] absolute bg-[blue] about-card-img right-[-50%] rounded-[6px] bg-cover bg-center'
                            style={{ backgroundImage: `url("${AfBg1}")` }}
                        >
                            <div className='h-full w-full bg-[rgba(0,0,0,0.3)]'></div>
                        </div>
                    </div>
                </div> */}
                <div className='basis-[46%] h-full w-full flex justify-end items-center'>
                    <div className='h-full w-full md:w-[60%] about-card  rounded-[12px] flex justify-end items-center relative'
                        style={{ boxShadow: "2px 2px 5px #000" }}
                    >
                        <div className='hidden md:block h-[90%] w-[70%] absolute bg-[blue] about-card-img left-[-50%] rounded-[6px] bg-cover bg-center'
                            style={{ backgroundImage: `url("${AfBg2}")` }}
                        >
                            <div className='h-full w-full bg-[rgba(0,0,0,0.3)]'></div>
                        </div>
                        
                        {/* --- MODIFICATIONS ARE IN THIS DIV --- */}
                        <div className='md:basis-[70%] h-full w-full px-[25px] md:px-[50px] py-[20px] flex justify-center items-start md:items-start gap-[20px] flex-col'> {/* Changed md:items-end to md:items-start */}
                            <h2 className='titleText'
                                style={{fontFamily:"Satoshi"}}
                            >What we do</h2>
                            <p className='paragraph text-left md:text-left'> {/* Changed tex-left to text-left and md:text-right to md:text-left */}

                                We deliver institutional-grade wealth management to more people through a powerful blend of smart technology, global expertise, and human judgment. We build cost-efficient, adaptive investment strategies that grow with people's lives.

                                No one-size-fits-all portfolios. Life evolves, markets shift, and goals change. We manage the details, so our clients can focus on what matters most.

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFoinikas