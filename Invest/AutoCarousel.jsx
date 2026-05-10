// components/AutoCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css'; // Make sure this is imported for the scrollbar styles

const AutoCarousel = ({ items, count }) => {
    return (
        <div className="h-[90%] w-full md:px-4 py-8">
            <Swiper
                // ... (Swiper props unchanged)
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: count },
                }}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="h-full" 
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id} className="h-full">
                        <div className="h-full rounded-[24px] overflow-hidden bg-cover bg-center">
                            <div
                                className="h-full w-full bg-cover bg-center"
                                style={{ backgroundImage: `url("${item.img}")` }}
                            >
                                <div
                                    // Your original layout - card at the bottom
                                    className='h-full w-full flex flex-col justify-end items-center text-center pb-[40px]'
                                    style={{ background: "linear-gradient(180deg, rgba(135, 17, 193, 0.3) 10%, rgba(100, 3, 63, 0.8) 100%)" }}
                                >
                                    {/* --- UNIFIED CARD STYLES START HERE --- */}
                                    <div
                                        // --- THE ONLY CHANGE IS HERE ---
                                        // Reduced height from 350px to 300px
                                        className="h-[300px] w-[93%] overflow-y-auto custom-scroll-card bg-[rgba(0,0,0,0.3)] backdrop-blur-[15px] rounded-[12px] relative flex flex-col justify-start items-start px-[20px] py-[20px] gap-[15px] mt-[20px]"
                                        style={{ boxShadow: "2px 2px 5px #000" }}
                                    >
                                        <h2
                                            className="tertiaryTitle text-white w-full text-left"
                                        >
                                            {item.title}
                                        </h2>
                                        <p
                                            className="paragraph text-white w-full text-left"
                                        >
                                            {item.content}
                                        </p>
                                    </div>
                                    {/* --- UNIFIED CARD STYLES END HERE --- */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AutoCarousel;