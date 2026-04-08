"use client"

import React, { useState } from 'react'
import Swipers from '../../molecules/Swipers';
import NgoCard from '../../molecules/NgoCard';
import Image from 'next/image';

const ListingCards = () => {
    const [activeTab, setActiveTab] = useState("all");

    const cards = [
        {
            CardImg: "/assets/images/NGO/icon/1.png",
            NgoName: "Vimukti Sanstha",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "education"
        },
        {
            CardImg: "/assets/images/NGO/icon/2.png",
            NgoName: "Snehalaya",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "children"
        },
        {
            CardImg: "/assets/images/NGO/icon/3.png",
            NgoName: "Christel House India",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "children"
        },
        {
            CardImg: "/assets/images/NGO/icon/4.png",
            NgoName: "Unique Welfare Foundation",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "children"
        },
        {
            CardImg: "/assets/images/NGO/icon/5.png",
            NgoName: "Vimukti Sanstha",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "women"
        },
        {
            CardImg: "/assets/images/NGO/icon/1.png",
            NgoName: "Christel House India",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "education"
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
            heading: "Poverty",
            dataTab: "poverty"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/3.svg",
            heading: "Differently Abled",
            dataTab: "differently-abled"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/4.svg",
            heading: "Disaster Relief",
            dataTab: "disaster-relief"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/5.svg",
            heading: "Environment",
            dataTab: "environment"
        },
        {
            figureImageSrc: "/assets/images/fundraisers-card/fundraisers-tab-icon/6.svg",
            heading: "Arts & Culture",
            dataTab: "arts-culture"
        },
    ];

    const filteredCards = activeTab === "all"
        ? cards
        : cards.filter(card => card.Datacategory === activeTab);


    return (
        <>
            <div className="ngo-listing-section">
                <div className="container">

                    <div className="tab-nav">
                        <Swipers
                            onSlideClick={(item) => setActiveTab(item.dataTab)}
                            activeTab={activeTab}

                            className="ngo-listing-swiper"
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

                    {filteredCards.length > 0 ? (
                        <div className="grid-box">
                            {filteredCards.map((item, index) => (
                                <NgoCard key={index} {...item} />
                            ))}
                        </div>
                    ) : (
                        <div className="not-found">
                            <figure>
                                <Image src="/assets/images/not-found.gif" width="120" height="120" alt="not found" ></Image>
                            </figure>
                            <p className="no-data">No NGO available</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListingCards