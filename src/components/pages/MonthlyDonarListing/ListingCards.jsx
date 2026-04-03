"use client"

import React from 'react'
import MonthlyDonorCard from '../../molecules/MonthlyDonorCard';

const ListingCards = () => {

    const cards = [
        {
            CardImg: "/assets/images/monthlydoner/1.jpg",
            CardWidth: "381",
            CardHeight: "226",
            CardHeading: "Disaster Relief Response",
            CardDescription: "1.6L+ Indians left homeless by disasters",
            CardStartsFromLabel: "Starts from",
            CardPrice: "₹500",
            CardPricePeriod: "month",
            CardBtnText: "Donate Now",
            detailLink: "/monthly-donor-detail",
        },
        {
            CardImg: "/assets/images/monthlydoner/2.jpg",
            CardWidth: "381",
            CardHeight: "226",
            CardHeading: "Support Differently-Abled",
            CardDescription: "26 million people are differently-abled",
            CardStartsFromLabel: "Starts from",
            CardPrice: "₹700",
            CardPricePeriod: "month",
            CardBtnText: "Donate Now",
            detailLink: "/monthly-donor-detail",
        },
        {
            CardImg: "/assets/images/monthlydoner/3.jpg",
            CardWidth: "381",
            CardHeight: "226",
            CardHeading: "Educate Every Child",
            CardDescription: "1.2 million students are out of school",
            CardStartsFromLabel: "Starts from",
            CardPrice: "₹400",
            CardPricePeriod: "month",
            CardBtnText: "Donate Now",
            detailLink: "/monthly-donor-detail",
        },
        {
            CardImg: "/assets/images/monthlydoner/1.jpg",
            CardWidth: "381",
            CardHeight: "226",
            CardHeading: "Disaster Relief Response",
            CardDescription: "1.6L+ Indians left homeless by disasters",
            CardStartsFromLabel: "Starts from",
            CardPrice: "₹500",
            CardPricePeriod: "month",
            CardBtnText: "Donate Now",
            detailLink: "/monthly-donor-detail",
        },
        {
            CardImg: "/assets/images/monthlydoner/2.jpg",
            CardWidth: "381",
            CardHeight: "226",
            CardHeading: "Support Differently-Abled",
            CardDescription: "26 million people are differently-abled",
            CardStartsFromLabel: "Starts from",
            CardPrice: "₹700",
            CardPricePeriod: "month",
            CardBtnText: "Donate Now",
            detailLink: "/monthly-donor-detail",
        },
        {
            CardImg: "/assets/images/monthlydoner/3.jpg",
            CardWidth: "381",
            CardHeight: "226",
            CardHeading: "Educate Every Child",
            CardDescription: "1.2 million students are out of school",
            CardStartsFromLabel: "Starts from",
            CardPrice: "₹400",
            CardPricePeriod: "month",
            CardBtnText: "Donate Now",
            detailLink: "/monthly-donor-detail",
        }
    ];

    return (
        <>
            <section>
                <div className="monthly-donar-listing-section">
                    <div className="container">

                        <div className="heading">
                            <h2>Join our Monthly Missions</h2>
                        </div>

                        <div className="grid-box">
                            {cards.map((item, index) => (
                                <MonthlyDonorCard key={index} {...item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ListingCards