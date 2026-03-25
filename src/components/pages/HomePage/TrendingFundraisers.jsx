"use client"

import React, { useState } from 'react'
import Swipers from "../../molecules/Swipers"
import Image from 'next/image'

const TrendingFundraisers = () => {

    const [activeTab, setActiveTab] = useState("medical")
    const cards = [
        {
            CardImg: "/assets/images/fundraisers-card/1.jpg",
            CardHeading: "6 years old child of Sivaprasad needs your help fight Brain Stem Medulloblastoma",
            author: "Vimukti Sanstha",
            location: "Gurugram",
            raised: "₹17,39,440",
            goal: "₹30,00,000",
            progress: 55,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "453",
            detailLink: "/",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/2.jpg",
            CardHeading: "Support Riya’s heart surgery and give her a second chance at life",
            author: "Care Foundation",
            location: "Delhi",
            raised: "₹9,80,000",
            goal: "₹15,00,000",
            progress: 65,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "312",
            detailLink: "/",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/3.png",
            CardHeading: "Help flood-affected families rebuild their homes in Assam",
            author: "Relief Trust",
            location: "Assam",
            raised: "₹5,20,300",
            goal: "₹10,00,000",
            progress: 52,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "198",
            detailLink: "/",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/1.jpg",
            CardHeading: "Urgent help needed for cancer treatment of 8-year-old Aarav",
            author: "Hope NGO",
            location: "Mumbai",
            raised: "₹12,45,000",
            goal: "₹20,00,000",
            progress: 62,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "521",
            detailLink: "/",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/2.jpg",
            CardHeading: "Provide education and meals for underprivileged children",
            author: "Smile Foundation",
            location: "Bangalore",
            raised: "₹3,75,600",
            goal: "₹8,00,000",
            progress: 47,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "267",
            detailLink: "/",
            dataTab: "medical"
        }
    ];

    const filteredCards = activeTab === "viewall" ? cards : cards.filter(item => item.dataTab === activeTab);

    return (
        <>
            <section>
                <div className="home-secE">
                    <div className="container">
                        <div className="heading">
                            <figure>
                                <img src="assets/images/donify-ico.svg" width="90" height="90" alt="donify ico" />
                            </figure>
                            <h2>Trending Fundraisers</h2>
                            <p>View the fundraisers that are most active right now</p>
                        </div>

                        <ul className="tab-nav">
                            <li className={activeTab === "medical" ? "active" : " "} onClick={() => { setActiveTab("medical") }}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 2048 2048"><path fill="#F36E2A" d="M1728 640q66 0 124 25t101 69t69 102t26 124q0 57-19 109t-53 93t-81 71t-103 41v102q0 89-22 173t-62 160t-98 137t-129 107t-155 70t-174 25q-91 0-174-25t-154-70t-129-107t-98-137t-63-159t-22-174v-229q-123-11-218-59T133 962T34 781T0 558V0h320q26 0 45 19t19 45t-19 45t-45 19H128v430q0 106 29 192t87 147t140 94t192 33q101 0 184-31t141-89t91-140t32-185V128H832q-26 0-45-19t-19-45t19-45t45-19h320v558q0 120-34 223t-99 181t-160 126t-219 59v229q0 107 38 205t107 174t162 120t205 45q111 0 204-45t162-120t107-173t39-206v-102q-56-12-103-41t-81-70t-53-94t-19-109q0-66 25-124t68-101t102-69t125-26m0 512q40 0 75-15t61-41t41-61t15-75t-15-75t-41-61t-61-41t-75-15t-75 15t-61 41t-41 61t-15 75t15 75t41 61t61 41t75 15" /></svg>
                                </figure>
                                Medical
                            </li>
                            <li className={activeTab === "education" ? "active" : " "} onClick={() => { setActiveTab("education") }}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><path fill="#F36E2A" fillRule="evenodd" d="M.573 4.1a.999.999 0 0 0 0 1.808l1.43.675v3.92c0 .742.241 1.57.944 2.08c.886.64 2.5 1.42 5.06 1.42s4.17-.785 5.06-1.42c.703-.508.944-1.33.944-2.08v-3.92l1-.473v4.39a.5.5 0 0 0 1 0V5a1 1 0 0 0-.572-.904l-5.72-2.7a4 4 0 0 0-3.42 0l-5.72 2.7zm2.43 6.4V7.05l3.29 1.56a4 4 0 0 0 3.42 0l3.29-1.56v3.45c0 .556-.18 1.01-.53 1.26c-.724.523-2.13 1.24-4.47 1.24s-3.75-.712-4.47-1.24c-.349-.252-.529-.709-.529-1.26zm3.72-8.2a2.99 2.99 0 0 1 2.56 0l5.72 2.7l-5.72 2.7a2.99 2.99 0 0 1-2.56 0L1.003 5z" clipRule="evenodd"/></svg>
                                </figure>
                                Education</li>
                            <li className={activeTab === "children" ? "active" : " "} onClick={() => { setActiveTab("children") }}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={24} viewBox="0 0 640 512"><path fill="#F36E2A" d="M160 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128M88 480v-80H70.2c-10.9 0-18.6-10.7-15.2-21.1l31.1-93.4l-28.6 37.8c-10.7 14.1-30.8 16.8-44.8 6.2s-16.8-30.7-6.2-44.8L65.4 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.6-37.8l31.1 93.4c3.5 10.4-4.3 21.1-15.2 21.1H232v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32M480 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-8 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.1 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9l51.7 82.2c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-13-20.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96z"/></svg>
                                </figure>
                                Children</li>
                            <li className={activeTab === "women" ? "active" : " "} onClick={() => { setActiveTab("women") }}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48"><path fill="none" stroke="#F36E2A" strokeLinejoin="round" strokeWidth="2.7" d="M19.225 6.37c-3.183 0-8.063 1.837-6.366 13.213q.04.258.095.557c.31 1.711.788 4.36-2.254 6.544c2.069 1.698 5.016 3.395 8.597 4.13a28 28 0 0 1-.532 2.414c-.291 1.068-.901 1.825-1.991 2.148c-.96.284-1.966.514-2.996.75q-.398.09-.8.184c-1.285.299-2.595.63-3.756 1.098c-1.164.47-2.246 1.103-3.028 2.047c-.796.963-1.222 2.177-1.193 3.695c.01.472.414.85.91.85h36.178c.496 0 .9-.378.91-.85c.029-1.518-.396-2.732-1.193-3.695c-.781-.944-1.864-1.578-3.027-2.047c-1.162-.469-2.472-.8-3.758-1.099l-.798-.183c-1.031-.236-2.037-.466-2.997-.75c-1.09-.323-1.7-1.08-1.991-2.148a27 27 0 0 1-.606-2.88c2.738-.824 5.648-2.305 8.671-4.67l-.014-.014c-1.419-1.358-4.079-3.904-4.268-9.948c0-8.322-5.306-15.637-13.793-9.347Z"/></svg>
                                </figure>
                                Women </li>
                            <li className={activeTab === "elderly" ? "active" : " "} onClick={() => { setActiveTab("elderly") }}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#F36E2A" d="m8 23l-1.6-1.2L9 18.325V13q0-.775.125-1.687T9.5 9.625L8 10.45V14H6V9.3l4.4-2.5q.625-.35 1.088-.537t.862-.188q.625 0 1.138.538T14.675 8.3q.8 1.35 1.45 2.025t1.4 1.025q.275-.2.475-.275t.475-.075q.625 0 1.075.45T20 12.5V23h-1V12.5q0-.2-.15-.35T18.5 12t-.35.15t-.15.35v1.25h-1v-.475q-1.35-.575-2.1-1.287t-1.325-1.913q-.275.7-.437 1.713t-.113 1.912L15 16.5V23h-2v-5l-1.775-2.55L11 19zm5.5-17.5q-.825 0-1.412-.587T11.5 3.5t.588-1.412T13.5 1.5t1.413.588T15.5 3.5t-.587 1.413T13.5 5.5"/></svg>
                                </figure>
                                Elderly</li>
                            <li className={activeTab === "community" ? "active" : " "} onClick={() => { setActiveTab("community") }}>
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32"><path fill="#F36E2A" d="M16 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-4.5 2.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0M6 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0m22 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8M8.5 16.5q0-.334.053-.651l-4.7 1.259a2.5 2.5 0 0 0-1.767 3.062l.906 3.38a6 6 0 0 0 7.996 4.03a7.5 7.5 0 0 1-1.387-1.666a4 4 0 0 1-4.677-2.881l-.906-3.38a.5.5 0 0 1 .353-.613L8.5 17.934zm13.157 11.293a6 6 0 0 1-.646-.212a7.5 7.5 0 0 0 1.388-1.666a4 4 0 0 0 4.675-2.882l.905-3.381a.5.5 0 0 0-.353-.612L23.5 17.934V16.5q0-.332-.053-.65l4.697 1.258a2.5 2.5 0 0 1 1.767 3.062l-.906 3.38a6 6 0 0 1-7.348 4.243M12.5 14a2.5 2.5 0 0 0-2.5 2.5V22a6 6 0 0 0 12 0v-5.5a2.5 2.5 0 0 0-2.5-2.5zm-.5 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V22a4 4 0 0 1-8 0z"/></svg>
                                </figure>
                                Community</li>
                            <li className={activeTab === "viewall" ? "active" : " "} onClick={() => { setActiveTab("viewall") }}>V
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}  viewBox="0 0 20 20"><path fill="#F36E2A" d="M10 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"/></svg>
                                </figure>
                                iew all</li>
                        </ul>

                        {filteredCards.length > 0 ? (
                            <Swipers
                                key={activeTab}
                                className="home-secE-swiper"
                                swiperSlideCard="FundraisersCard"
                                imageWidth={381}
                                imageHeight={226}
                                slidesPerView={3}
                                spaceBetween={20}
                                speed={1000}
                                navigation={filteredCards.length > 3}
                                autoplay={false}
                                loop={false}
                                pagination={false}
                                data={filteredCards}
                                swiperNavBtn="white-btn-secondary-border"
                                swiperNavClass="center-full-full"
                            />
                        ) : (
                            <div className="not-found">
                                <figure>
                                    <Image src="/assets/images/not-found.gif" width="120" height="120" alt="not found" ></Image>
                                </figure>
                                <p className="no-data">No fundraisers available</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default TrendingFundraisers