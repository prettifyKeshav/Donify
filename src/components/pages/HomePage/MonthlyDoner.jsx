import Button from "../../atoms/Button";
import Swipers from "../../molecules/Swipers"
import Image from "next/image";

const MonthlyDoner = () => {

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
            CardHref: "/",
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
            CardHref: "/",
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
            CardHref: "/",
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
            CardHref: "/",
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
            CardHref: "/",
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
            CardHref: "/",
        }
    ];


    return (
        <>
            <section>
                <div className="home-secD">
                    <div className="banner">
                        <video playsInline autoPlay muted loop width="100%" height="100%" >
                            <source src="/assets/video/home-secD-banner.mp4" type="video/mp4" />
                        </video>

                        <div className="banner-wrapper">
                            <div className="container">
                                <h2>Become a Monthly Donor</h2>
                                <h3>Donate &nbsp;<span>M <span className="heart-wrapper"><Image src="/assets/images/Home/heart-wrapper.svg" width={62} height={62} alt="white-wrapper" className="white-circle" ></Image><Image src="/assets/images/Home/heart.svg" className="heart" width={30} height={27} alt="heart" ></Image></span> nthly </span></h3>

                                <Swipers
                                    className="home-secD-swiper"
                                    swiperSlideCard="MonthlyDonor"
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
                                    swiperNavBtn="white-btn"
                                    swiperNavClass="center-full-full"

                                />

                                <div className="btn-wrapper">
                                    <Button className="btn secondary-border" href="/">View all</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MonthlyDoner