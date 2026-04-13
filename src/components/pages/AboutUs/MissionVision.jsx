"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const MissionVision = () => {
    const [tabActive, setTabActive] = useState("mission")

    const handleTabActive = (tab) => {
        setTabActive(tab)
    }

    return (
        <>
            <section>
                <div className="about-secB">
                    <div className="banner">
                        <Image
                            src="/assets/images/about/mission-vision-banner.jpg"
                            height={654}
                            width={1280}
                            alt="banner-ico"
                        />

                        <div className="banner-wrapper">
                            <div className="container">

                                <ul className="tab-nav">
                                    <li
                                        className={tabActive === "mission" ? "active" : ""} onClick={() => handleTabActive("mission")}>
                                        Mission
                                    </li>
                                    <li
                                        className={tabActive === "vision" ? "active" : ""} onClick={() => handleTabActive("vision")}>
                                        Vision
                                    </li>
                                </ul>

                                <div className="tab-nav-content">
                                    {tabActive === "mission" && (
                                        <div className="tabs active">
                                            <p>
                                                Our mission is to create meaningful impact by empowering communities, supporting those in need, and driving sustainable change. We aim to make resources, opportunities, and support accessible to everyone, helping build a more inclusive and compassionate society.
                                            </p>
                                        </div>
                                    )}

                                    {tabActive === "vision" && (
                                        <div className="tabs active">
                                            <p>
                                                Our vision is to build a world where every individual has equal access to opportunities, resources, and support needed to lead a dignified and fulfilling life. We strive to create a compassionate and inclusive society driven by collaboration, innovation, and sustainable growth, where communities thrive together and positive change is long-lasting.
                                            </p>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MissionVision