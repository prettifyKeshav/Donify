'use client'
import React, { useState } from 'react'
import Hero from '../../organisms/Hero'
import "@/uploads/styles/monthly-donar-listing/monthly-donar-listing.css"
import "@/uploads/styles/component/component.css"
import WhyDonate from './WhyDonate'
import FaqSection from './FaqSection'
import SimilarMissions from './SimilarMissions'
import Button from '../../atoms/Button'
import Swipers from '../../molecules/Swipers'
import Image from 'next/image'
import Accordion from '../../molecules/Accordion'
import StoriesHope from './StoriesHope'

const MonthlyDonorDetailPage = () => {

    const [amount, setAmount] = useState(3000)
    const [customAmount, setCustomAmount] = useState('₹3,000')

    const presetAmounts = [
        { label: '₹1,000/M', value: 1000 },
        { label: '₹3,000/M', value: 3000, popular: true },
        { label: '₹5,000/M', value: 5000 },
    ]

    const handlePreset = (value) => {
        setAmount(value)
        setCustomAmount(`₹${value.toLocaleString('en-IN')}`)
    }

    const handleCustomInput = (e) => {
        const raw = e.target.value.replace(/[^0-9]/g, '')
        setAmount(Number(raw))
        setCustomAmount(raw ? `₹${Number(raw).toLocaleString('en-IN')}` : '')
    }

    const NaturalDisastersSwiperData = [
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Natural-Disasters-swiper/1.jpg",
            imageWidth: "90",
            imageHeight: "90",
            heading: "Thousands Displaced",
            description: "Families forced to leave their homes and start over",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Natural-Disasters-swiper/2.jpg",
            imageWidth: "90",
            imageHeight: "90",
            heading: "Thousands Displaced",
            description: "Families forced to leave their homes and start over",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Natural-Disasters-swiper/1.jpg",
            imageWidth: "90",
            imageHeight: "90",
            heading: "Thousands Displaced",
            description: "Families forced to leave their homes and start over",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Natural-Disasters-swiper/2.jpg",
            imageWidth: "90",
            imageHeight: "90",
            heading: "Thousands Displaced",
            description: "Families forced to leave their homes and start over",
        },
    ]


    const ContributionSwiperData = [
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/1.jpg",
            imageWidth: "366",
            imageHeight: "338",
            heading: "Provide Relief Kits",
            description: "Your support ensures families affected by disasters receive food, water, and essential supplies every month.",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/2.jpg",
            imageWidth: "366",
            imageHeight: "338",
            heading: "Set Up Temporary Shelter",
            description: "Help us create safe spaces for displaced families by providing shelter, bedding, and basic living essentials.",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/1.jpg",
            imageWidth: "366",
            imageHeight: "338",
            heading: "Support Emergency Healthcare",
            description: "Enable access to urgent medical care, medicines, and health checkups for those affected during crises.",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/2.jpg",
            imageWidth: "366",
            imageHeight: "338",
            heading: "Provide Clean Drinking Water",
            description: "Ensure safe and clean drinking water for communities facing shortages during disasters and emergencies.",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/1.jpg",
            imageWidth: "366",
            imageHeight: "338",
            heading: "Distribute Hygiene Kits",
            description: "Promote health and dignity by providing hygiene kits including soaps, sanitizers, and sanitary products.",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/2.jpg",
            imageWidth: "366",
            imageHeight: "338",
            heading: "Support Child Care & Nutrition",
            description: "Help children receive proper nutrition, care, and emotional support during and after disaster situations.",
        }
    ];

    const AccordianData = [
        {
            mainTitle: "1,20,000+ Lives Supported",
            paragraph: "Immediate assistance provided to children, elderly individuals, and vulnerable families across multiple disaster-hit regions.",
            isButtonVisible: "true"
        },
        {
            mainTitle: "8,500+ Families Sheltered",
            paragraph: "Safe and secure temporary shelters established, offering protection, food, and basic necessities to displaced families.",
            isButtonVisible: "true"
        },
        {
            mainTitle: "300+ Medical Camps Conducted",
            paragraph: "Emergency healthcare services delivered through medical camps, ensuring timely treatment, medicines, and preventive care.",
            isButtonVisible: "true"
        },
        {
            mainTitle: "150+ Rapid Response Deployments",
            paragraph: "Swift on-ground response teams mobilized to provide relief, rescue support, and essential supplies during critical situations.",
            isButtonVisible: "true"
        }
    ];

    return (
        <>
            <Hero
                className="hero-banner"
                bgType="image"
                bgSrc="/assets/images/banner/monthly-donner-detail-banner.jpg"
                title="Disaster Relief Response"
                description="Your monthly support helps us respond instantly to floods, earthquakes, cyclones, and other emergencies across India."
                btnChildren="Become a Monthly Donor"
                btnClassName="btn primary-btn"
                firstBtnHref="/fundraiser-listing"
            />

            <section>
                <div className="monthly-donor-detail-secA">
                    <div className="container">
                        <div className="grid-box">
                            <div className="col-left">
                                <h2>India Faces Repeated Natural Disasters Every Year</h2>
                                <p>Floods, cyclones, landslides, and earthquakes continue to disrupt lives across the country, leaving families without homes, food, clean water, and basic security. Every year, thousands are displaced overnight, forced to rebuild from nothing. In the critical hours after a disaster strikes, immediate relief can mean the difference between survival and tragedy. With consistent support, we can respond faster, reach deeper into affected communities, and ensure no family is left without help when they need it most.</p>

                                <div className="natural-disasters">
                                    <Swipers
                                        className="natural-disasters-swiper"
                                        imageWidth={90}
                                        imageHeight={90}
                                        slidesPerView={2}
                                        spaceBetween={30}
                                        speed={1000}
                                        navigation={true}
                                        autoplay={false}
                                        loop={false}
                                        pagination={false}
                                        data={NaturalDisastersSwiperData}
                                        swiperNavBtn="white-btn-secondary-border"
                                        swiperNavClass="center-full"
                                    />
                                </div>

                                <div className="our-mission-sec">
                                    <h2>Our Mission</h2>
                                    <ul>
                                        <li>To provide immediate emergency relief during natural disasters</li>
                                        <li>To ensure families receive food, clean water, and safe shelter</li>
                                        <li>To support vulnerable communities through recovery and rebuilding</li>
                                        <li>To maintain year-round preparedness for future emergencies</li>
                                    </ul>

                                    <div className="vector-img rotate-infinite">
                                        <Image src="/assets/vector/logo-vector.png" width={436} height={404} alt='vector'></Image>
                                    </div>
                                </div>

                                <div className="impact-so-far">
                                    <h2>Impact So Far</h2>
                                    <div className="flex-box">
                                        <figure>
                                            <Image src="/assets/images/monthlydoner/detailpage/impact-image.png" width={295} height={377} alt='ico image'></Image>
                                        </figure>

                                        <div className="impact-accordian">
                                            <Accordion
                                                data={AccordianData}

                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="contribution">
                                    <h2>How Your Contribution Makes a Difference</h2>
                                    <Swipers
                                        className="contribution-swiper"
                                        imageWidth={366}
                                        imageHeight={338}
                                        slidesPerView={2}
                                        spaceBetween={20}
                                        speed={1000}
                                        navigation={true}
                                        autoplay={false}
                                        loop={false}
                                        pagination={true}
                                        data={ContributionSwiperData}
                                        swiperNavBtn="white-btn-secondary-border"
                                        swiperNavClass="swiper-nav"
                                    />

                                </div>

                                <div className="stories-of-hope">
                                    <h2>Stories of Hope</h2>

                                    <StoriesHope />
                                </div>


                            </div>

                            <div className="col-right">
                                <h2>Become a Monthly Donor</h2>

                                <div className="donation-box__presets">
                                    <span className="most-popular">
                                        MOST POPULAR
                                    </span>
                                    {presetAmounts.map((preset) => (
                                        <button
                                            key={preset.value}
                                            className={`donation-box__preset-btn ${amount === preset.value ? 'active' : ''}`}
                                            onClick={() => handlePreset(preset.value)}
                                        >
                                            {preset.popular}
                                            {preset.label}
                                        </button>
                                    ))}
                                </div>

                                <div className="donation-box__input-wrapper">
                                    <input
                                        type="text"
                                        className="donation-box__input"
                                        value={customAmount}
                                        onChange={handleCustomInput}
                                        placeholder="₹0"
                                    />
                                </div>

                                <div className="bottom-btn-submit">
                                    <Button className='btn primary-btn' href='/'>Donate Monthly</Button>
                                    <Button className='btn gray-border' href='/'>Share</Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyDonate />
            <FaqSection />
            <SimilarMissions />
        </>
    )
}

export default MonthlyDonorDetailPage