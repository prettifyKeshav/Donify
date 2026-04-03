import React from 'react'
import Swipers from '../../molecules/Swipers';

const SimilarMissions = () => {

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
                <div className="similar-missions">
                    <div className="container">
                        <h2>Similar Missions</h2>
                        <Swipers
                            className="more-similar-missions"
                            swiperSlideCard="MonthlyDonor"
                            imageWidth={381}
                            imageHeight={226}
                            slidesPerView={3}
                            spaceBetween={20}
                            speed={1000}
                            navigation={cards.length > 3}
                            autoplay={false}
                            loop={false}
                            pagination={false}
                            data={cards}
                            swiperNavBtn="white-btn-secondary-border"
                            swiperNavClass="center-full-full"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default SimilarMissions