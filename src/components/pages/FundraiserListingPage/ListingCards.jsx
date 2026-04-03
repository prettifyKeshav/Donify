"use client"

import React from 'react'
import FundraisersCard from '../../molecules/FundraisersCard'
import Swipers from '../../molecules/Swipers';

const ListingCards = () => {

    const cards = [
        {
            CardImg: "/assets/images/fundraisers-card/1.jpg",
            CategoryName: "Children",
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
            detailLink: "/fundraiser-detail",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/2.jpg",
            CategoryName: "Medical",
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
            detailLink: "/fundraiser-detail",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/3.png",
            CategoryName: "Disaster Relief",
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
            detailLink: "/fundraiser-detail",
            dataTab: "relief"
        },
        {
            CardImg: "/assets/images/fundraisers-card/1.jpg",
            CategoryName: "Medical",
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
            detailLink: "/fundraiser-detail",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/2.jpg",
            CategoryName: "Education",
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
            detailLink: "/fundraiser-detail",
            dataTab: "education"
        }
    ];

    const TabNavCard = [
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/1.svg",
            heading: "All",
            dataTab: "all"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/2.svg",
            heading: "Education",
            dataTab: "education"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/3.svg",
            heading: "Children",
            dataTab: "children"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/4.svg",
            heading: "Women",
            dataTab: "women"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/5.svg",
            heading: "Elderly",
            dataTab: "elderly"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/6.svg",
            heading: "Community",
            dataTab: "community"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/2.svg",
            heading: "Education",
            dataTab: "education"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/3.svg",
            heading: "Children",
            dataTab: "children"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/4.svg",
            heading: "Women",
            dataTab: "women"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/5.svg",
            heading: "Elderly",
            dataTab: "elderly"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/6.svg",
            heading: "Community",
            dataTab: "community"
        },
    ];

    return (
        <>
            <div className="fundraiser-listing-section">
                <div className="container">

                    <div className="tab-nav">
                        <Swipers
                            className="fundraiser-listing-swiper"
                            data={TabNavCard}
                            slidesPerView={8}
                            spaceBetween={0}
                            imageWidth={32}
                            imageHeight={32}
                            speed={1000}
                            navigation={true}
                            autoplay={false}
                            loop={false}
                            pagination={false}
                            swiperNavBtn="btn white-btn secondary-border"
                            swiperNavClass="center-full-full"
                        />
                    </div>

                    <div className="grid-box">
                        {cards.map((item, index) => (
                            <FundraisersCard key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListingCards