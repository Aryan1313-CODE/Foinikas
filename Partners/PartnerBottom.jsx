import React, { useEffect } from 'react';
import figure1 from '../../assets/figure.png';
import figure2 from '../../assets/figure2.png';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PartnerBottom = () => {
    const heading = "Why we started Foinikas";

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const word = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const controls = useAnimation();
    const imageControls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: false });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
            imageControls.start({ opacity: 1, y: 0 });
        } else {
            controls.start('hidden');
            imageControls.start({ opacity: 0, y: 50 });
        }
    }, [inView, controls, imageControls]);

    return (
        /* FIX 1: Removed 'h-full', 'helloadjust', 'totalheight'.
           Replaced 'items-start' with 'items-stretch' so the image column
           will automatically stretch to be the same height as the text column.
           Added 'gap-6' for responsive spacing between the columns.
        */
        <div ref={ref} className='w-full flex justify-between items-stretch flex-col md:flex-row gap-6'>
            
            {/* Text Block */}
            {/* FIX 2: Removed 'h-[90%]' and 'mobilemovedown'.
               Changed to 'h-auto'. The height will now be set by the text and padding.
            */}
            <motion.div
                className='md:basis-[65%] flex justify-center px-[25px] md:px-[40px] items-center flex-col h-auto w-full bg-[#66023C] rounded-[10px] bg-[rgba(255,255,255,0.1)] shadow-lg backdrop-blur-[5px] pt-[20px] pb-[20px]'
                initial="hidden"
                animate={controls}
                variants={container}
            >
                <h2 className='titleText text-center hidden md:block'
                    style={{ fontFamily: "Satoshi" }}
                >
                    {heading.split(' ').map((wordText, index) => (
                        <motion.span
                            key={index}
                            variants={word}
                            className='inline-block mx-2'
                        >
                            {wordText}
                        </motion.span>
                    ))}
                </h2>

                <h2 className='tertiaryTitle text-white text-center md:hidden block mb-[10px]'
                    style={{ fontFamily: "Satoshi" }}
                >
                    {heading.split(' ').map((wordText, index) => (
                        <motion.span
                            key={index}
                            variants={word}
                            className='inline-block mx-2'
                        >
                            {wordText}
                        </motion.span>
                    ))}
                </h2>

                <motion.p
                    className='paragraph text-justify mt-1 pb-[30px]'
                    variants={{
                        hidden: { y: 30, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 1, ease: 'easeOut' } },
                    }}
                >
                   Our founding team brings decades of experience advising entrepreneurs, family offices, and institutional investors at some of the world’s leading financial institutions. Along the way, we saw a clear gap: even at the highest levels, innovation lagged, digital tools were outdated, and personalization was lacking. We launched Foinikas to change that. Our vision is to build a firm that fuses timeless investment principles with modern, agile infrastructure—a place where strategy and simplicity coexist, and clients never have to choose between sophistication and accessibility.

Foinikas is a European investment management firm rooted in a diverse heritage and inspired by the legacy of the Phoenicians — visionary traders and innovators who built lasting prosperity through adaptability, commerce, and trusted partnerships. We carry forward that spirit by identifying cross-border opportunities and executing with discipline, strategic insight, and a long-term mindset. At Foinikas, we blend innovation with rigorous risk management to deliver sustainable, risk-adjusted returns.
                </motion.p>
            </motion.div>

            {/* Image Block */}
            {/* FIX 3: Removed 'h-[90%]'.
               Because the parent div now uses 'items-stretch', this block
               will automatically stretch to match the height of the text block.
            */}
            <motion.div
                className='basis-[33%] relative w-full bg-[#d9d9d9] rounded-[10px] shadow-lg hidden md:block'
                style={{ background: "linear-gradient(180deg, rgba(156, 75, 121, 0.682243) 0%, rgba(211, 165, 189, 0.8) 100%)" }}
                initial={{ opacity: 0, y: 50 }}
                animate={imageControls}
                transition={{ duration: 1, ease: 'easeOut' }}
            >
                <img src={figure2} alt="" className='h-full md:h-[110%] absolute top-[0] md:top-[-55px] right-[0px] md:right-[-10px]' />
                <img src={figure1} alt="" className='h-full md:h-[95%] absolute bottom-[0] md:bottom-[-15px] left-[0px] md:left-[0px]' />
            </motion.div>
        </div>
    );
};

export default PartnerBottom;