"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import Button from '../../atoms/Button';

const slideData = [
    {
        stepImage: "/assets/images/NGO-Landing/how-it-works/1.svg",
        img: '/assets/images/NGO-Landing/Journey1.jpg',
        year: 'Step 1',
        title: 'Create Your Profile',
        content: 'Submit your NGO’s basic details, mission, and required documents to get started. Add essential information like contact details, registration info, and bank details to build a complete profile.'
    },
    {
        stepImage: "/assets/images/NGO-Landing/how-it-works/2.svg",
        img: '/assets/images/NGO-Landing/Journey1.jpg',
        year: 'Step 2',
        title: 'Create Your Profile',
        content: 'Submit your NGO’s basic details, mission, and required documents to get started. Add essential information like contact details, registration info, and bank details to build a complete profile.'
    },
    {
        stepImage: "/assets/images/NGO-Landing/how-it-works/3.svg",
        img: '/assets/images/NGO-Landing/Journey1.jpg',
        year: 'Step 3',
        title: 'Create Your Profile',
        content: 'Submit your NGO’s basic details, mission, and required documents to get started. Add essential information like contact details, registration info, and bank details to build a complete profile.'
    },
    {
        stepImage: "/assets/images/NGO-Landing/how-it-works/4.svg",
        img: '/assets/images/NGO-Landing/Journey1.jpg',
        year: 'Step 4',
        title: 'Create Your Profile',
        content: 'Submit your NGO’s basic details, mission, and required documents to get started. Add essential information like contact details, registration info, and bank details to build a complete profile.'
    }
];

const HowItWorks = () => {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <section className="ngo-landing-secB">

                <div className="container">
                    <div className="heading">
                        <h2>how it works</h2>
                        <h3>Your Journey Starts Here</h3>
                    </div>
                </div>

                <div className="year-swiper-grid">
                    <div className="year-timeline">
                        <div className="container">
                            <div className="years-container">
                                <div className="year-dots">
                                    {slideData.map((item, index) => (
                                        <span
                                            key={index}
                                            className={`year-dot ${index === activeIndex ? 'active' : ''}`}
                                            onClick={() => swiperRef.current?.slideToLoop(index)}
                                        >
                                            <figure>
                                                <Image src={item.stepImage} width={26} height={26} alt='ico'></Image>
                                            </figure>
                                            {item.year}
                                        </span>
                                    ))}
                                </div>
                                <div className="timeline-line-left"></div>
                                <div className="timeline-line-right"></div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-parent">
                        <div className="container">
                            <div className="swiper-wrap" data-animate="fade-up">
                                <Swiper
                                    modules={[Navigation]}
                                    // loop={true}
                                    navigation={{
                                        prevEl: '.specialization-prev',
                                        nextEl: '.specialization-next',
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 10,
                                            speed: 500,
                                        },
                                        540: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                            speed: 700,
                                        },
                                        768: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                            speed: 700,
                                        },
                                        991: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                            speed: 700,
                                        },
                                    }}
                                    onSwiper={(swiper) => {
                                        swiperRef.current = swiper;
                                    }}
                                    onSlideChange={(swiper) => {
                                        setActiveIndex(swiper.realIndex);
                                    }}
                                    className="specialization-slider"
                                >
                                    {slideData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="swiper-card">
                                                <div className="card-body">
                                                    <figure>
                                                        <Image src={item.img} height={266} width={387} alt={item.title}></Image>
                                                    </figure>

                                                    <div className="card-content">
                                                        <h5>{item.title}</h5>
                                                        <p>{item.content}</p>
                                                        <Button className='btn primary-btn' href='/' >Enroll Now</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="swiper-nav swiper-group">
                                    <button type="button" className="specialization-prev">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 14l-5-5l-5 5" strokeWidth="1" />
                                        </svg>
                                    </button>
                                    <button type="button" className="specialization-next">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m17 14l-5-5l-5 5" strokeWidth="1" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowItWorks