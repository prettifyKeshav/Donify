"use client"

import React, { useState } from 'react'
import Swipers from '../../molecules/Swipers'

const OurPartners = () => {

    const [activeTab, setActiveTab] = useState("doners");

    const cards = [
        {
            userMessage: "Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy. Their professionalism and personal commitment are truly impressive.",
            userImage: "/assets/images/Home/user/1.jpg",
            userName: "G. Ravindranath ",
            userDesignation: "Dalyan Foundation",
            dataTab: "doners"
        },
        {
            userMessage: "Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy. Their professionalism and personal commitment are truly impressive.",
            userImage: "/assets/images/Home/user/2.jpg",
            userName: "G. Balachandran ",
            userDesignation: "P&G Health",
            dataTab: "doners"
        },
        {
            userMessage: "Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy. Their professionalism and personal commitment are truly impressive.",
            userImage: "/assets/images/Home/user/3.jpg",
            userName: "G. Vasudevan",
            userDesignation: "Dalyan Foundation",
            dataTab: "ngos"
        },
        {
            userMessage: "Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy. Their professionalism and personal commitment are truly impressive.",
            userImage: "/assets/images/Home/user/1.jpg",
            userName: "G. Ravindranath ",
            userDesignation: "Dalyan Foundation",
            dataTab: "ngos"
        },
        {
            userMessage: "Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy. Their professionalism and personal commitment are truly impressive.",
            userImage: "/assets/images/Home/user/1.jpg",
            userName: "G. Ravindranath ",
            userDesignation: "Dalyan Foundation",
            dataTab: "ngos"

        },
        {
            userMessage: "Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy. Their professionalism and personal commitment are truly impressive.",
            userImage: "/assets/images/Home/user/2.jpg",
            userName: "G. Balachandran ",
            userDesignation: "P&G Health",
            dataTab: "ngos"
        },
        {
            userMessage: "Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy. Their professionalism and personal commitment are truly impressive.",
            userImage: "/assets/images/Home/user/3.jpg",
            userName: "G. Vasudevan",
            userDesignation: "Dalyan Foundation",
            dataTab: "celebrities"
        },
        {
            userMessage: "Partnering with this foundation provides a fantastic learning opportunity on high-engagement philanthropy. Their professionalism and personal commitment are truly impressive.",
            userImage: "/assets/images/Home/user/1.jpg",
            userName: "G. Ravindranath ",
            userDesignation: "Dalyan Foundation",
            dataTab: "doners"
        }
    ]

    const filteredCards = cards.filter(item => item.dataTab === activeTab);

    return (
        <>
            <section>
                <div className="home-secH">
                    <div className="container">
                        <h2>What our partners say about <span>Donify</span></h2>

                        <ul className="tab-nav">
                            <li className={activeTab === "doners" ? "active" : ""} onClick={() => setActiveTab("doners")} > Donors </li>
                            <li className={activeTab === "ngos" ? "active" : ""} onClick={() => setActiveTab("ngos")} >NGOs </li>
                            <li className={activeTab === "celebrities" ? "active" : ""} onClick={() => setActiveTab("celebrities")}>Celebrities</li>
                        </ul>

                        <Swipers
                            key={activeTab}
                            className="home-secH-swiper"
                            swiperSlideCard="PartnersCard"
                            slidesPerView={3}
                            spaceBetween={20}
                            speed={700}
                            navigation={true}
                            autoplay={false}
                            loop={false}
                            pagination={false}
                            data={filteredCards}
                            swiperNavBtn="white-btn-secondary-border"
                            swiperNavClass="center-full-full"
                        />


                    </div>

                </div>
            </section>
        </>
    )
}

export default OurPartners