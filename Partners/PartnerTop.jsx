import React, { useEffect } from 'react';

import Partners2 from '../../assets/partners2.webp'


import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'

const PartnerTop = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.4, // Trigger when 60% in view
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls]);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const staggerContainer = {
        visible: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    return (
        <>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={staggerContainer}
                className="w-full h-full hidden md:flex justify-around items-center flex-col md:flex-col "
            >
                <div className=' h-full w-full flex justify-between items-center flex-row '>
                    <motion.div
                        variants={fadeUp}
                        className="basis-[50%] h-[90%] w-full flex justify-start items-center flex-col md:flex-col bg-[rgba(255,255,255,0.1)] backdrop-blur-[15px] px-[40px] py-[30px] rounded-[12px]"
                    >
                        <div className="basis-[30%] h-full w-full  flex justify-between items-start">
                            <motion.div
                                className="flex flex-wrap justify-center md:justify-start basis-[60%]"
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.3, // Adjust delay between words
                                        },
                                    },
                                }}
                            >
                                {`Foinikas Partnership with IBKR`
                                    .split(' ')
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 20 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.6, // Increase duration here if needed
                                                        ease: 'easeOut',
                                                    },
                                                },
                                            }}
                                            className="mr-2 secondaryTitle text-white text-center"
                                            style={{ textShadow: '2px 2px 2px #000' }}
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                            </motion.div>

                            {/* <Link to={"/about-us#smartTech"} className="secondary-btn flex justify-center items-center mt-[10px]">
                                Learn More
                            </Link> */}
                        </div>
                        <div className="basis-[59%] h-full w-full flex items-center mt-[15px] md:mt-[0]">
                            <p className="paragraph text-center md:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                                animi dolores ipsa, optio iusto reiciendis velit quae vel nobis,
                                repellat autem eos tenetur quisquam magni. Fugit accusamus vitae
                                odit deserunt voluptatem maxime, culpa vel sed molestias veniam
                                magni ab neque eveniet sunt. Mollitia dolor tempora unde magni
                                velit excepturi cupiditate?
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="basis-[48%] h-[90%] w-full flex justify-center items-start gap-[20px] flex-col rounded-[12px] overflow-hidden"
                    >

                        {/* <img src="https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                            className=''
                            style={{objectFit:"contain"}}
                        /> */}
                        {/* <div className='basis-[60%] h-full w-full  flex justify-center items-center flex-row'>
                            {[IBKRLogo, Logo1].map((logo, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    className={`basis-[50%] h-full w-full bg-contain bg-center bg-no-repeat `}
                                    style={{ backgroundImage: `url("${logo}")` }}
                                ></motion.div>
                            ))}
                        </div> */}
                        {/* <Link to={"/about-us#smartTech"} className="secondary-btn flex justify-center items-center ml-[20px]">Learn More</Link> */}
                        <motion.div
                            variants={fadeUp}
                            key={1}
                            className='h-full w-full bg-cover bg-center'
                            style={{ backgroundImage: `url('${Partners2}')` }}
                        >
                            <div className='h-full w-full bg-[rgba(0,0,0,0.1)]'></div>
                        </motion.div>


                    </motion.div>
                </div>


            </motion.div>
            <div
                className="w-full h-full md:hidden flex justify-around items-center flex-col md:flex-row "
            >
                <div
                    className="basis-[35%] h-full w-full flex justify-center items-center flex-col md:flex-col"
                >
                    <div className="basis-[30%] h-full w-full  flex justify-start items-end">
                        <div className="flex flex-wrap justify-center md:justify-start">
                            {`Foinikas Partnership with IBKR`
                                .split(' ')
                                .map((word, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 secondaryTitle text-white text-center"
                                        style={{ textShadow: '2px 2px 2px #000' }}
                                    >
                                        {word}
                                    </span>
                                ))}
                        </div>
                    </div>
                    <div className="basis-[59%] h-full w-full flex items-center mt-[15px] md:mt-[0]">
                        <p className="paragraph text-center md:text-left">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
                            animi dolores ipsa, optio iusto reiciendis velit quae vel nobis,
                            repellat autem eos tenetur quisquam magni. Fugit accusamus vitae
                            odit deserunt voluptatem maxime, culpa vel sed molestias veniam
                            magni ab neque eveniet sunt. Mollitia dolor tempora unde magni
                            velit excepturi cupiditate?
                        </p>
                    </div>
                </div>

                =
            </div>

        </>
    );
};

export default PartnerTop;
