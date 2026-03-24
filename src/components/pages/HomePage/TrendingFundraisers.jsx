import React from 'react'
import Swipers from "../../molecules/Swipers"

const TrendingFundraisers = () => {

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
            detailLink: "/"
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
            detailLink: "/"
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
            detailLink: "/"
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
            detailLink: "/"
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
            detailLink: "/"
        }
    ];

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

                        <Swipers
                            className="home-secE-swiper"
                            swiperSlideCard="FundraisersCard"
                            imageWidth={381}
                            imageHeight={226}
                            slidesPerView={3}
                            spaceBetween={20}
                            speed={1000}
                            navigation={true}
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

export default TrendingFundraisers