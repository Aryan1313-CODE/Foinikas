import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';

const DigitalCarousel = ({ items, count }) => {
    return (
        <div className="h-[90%] w-full px-4 py-8">
            <Swiper
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
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className={` shadow-lg rounded-3xl h-full overflow-hidden flex flex-col justify-center items-center text-center bg-cover bg-center`}
                            style={{ background: `${item.color}` }}
                        >
                            <div
                                className={`h-full w-full rounded-3xl relative flex ${count === 4 ? 'justify-start items-start' : 'justify-end items-start'
                                    } flex-col px-[40px] py-[40px] gap-[20px]`}
                                style={{
                                    background: `${count === 3
                                            ? 'linear-gradient(to bottom,rgba(0,0,0,0) 45% , rgba(0,0,0,0.8))'
                                            : ''
                                        }`,
                                }}
                            >
                                <h2
                                    className={`tertiaryTitle text-black ${count === 3
                                            ? 'w-[80%] text-left'
                                            : count === 4
                                                ? 'w-[95%] text-left'
                                                : 'w-[80%] text-left'
                                        }`}
                                >
                                    {item.title}
                                </h2>
                                <p
                                    className={`paragraph ${count === 3
                                            ? 'w-[80%] text-left'
                                            : count === 4
                                                ? 'w-full text-left'
                                                : 'w-[80%] text-left'
                                        }`}

                                        style={{color:"#000"}}
                                >
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default DigitalCarousel
