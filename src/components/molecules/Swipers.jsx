"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const Swipers = ({
    className = "",
    spaceBetween = 0,
    slidesPerView = 1,
    imageWidth = 69,
    imageHeight = 69,
    data = [],
    autoplay,
    loop,
    speed,
}) => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerView}
            className={className}
            loop={loop}
            autoplay={autoplay ? { delay: 0, disableOnInteraction: false } : false}
            speed={speed}
            pagination={{
                    type: "progressbar",
                    el: ".swiper-pagination",
                    clickable: true,
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                }}
        >
            {data.map((item, index) => (
                <SwiperSlide key={index}>
                    <figure>
                        <Image
                            src={item.figureImageSrc}
                            width={imageWidth}
                            height={imageHeight}
                            alt="figure image"
                        />
                    </figure>

                    <figcaption>
                        <h4>{item.heading}</h4>
                        <p>{item.description}</p>
                    </figcaption>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Swipers;