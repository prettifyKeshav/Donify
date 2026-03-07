import React from "react";
import Swipers from "../../molecules/Swipers";

const TopDonation = () => {

    const swiperContent = [
        {
            figureImageSrc: "/assets/images/Home/user/1.jpg",
            heading: "G. Ravindranath just donated",
            description: "₹5000"
        },
        {
            figureImageSrc: "/assets/images/Home/user/1.jpg",
            heading: "G. Ravindranath just donated",
            description: "₹5000"
        },
        {
            figureImageSrc: "/assets/images/Home/user/1.jpg",
            heading: "G. Ravindranath just donated",
            description: "₹5000"
        },

        {
            figureImageSrc: "/assets/images/Home/user/1.jpg",
            heading: "G. Ravindranath just donated",
            description: "₹5000"
        },
        {
            figureImageSrc: "/assets/images/Home/user/1.jpg",
            heading: "G. Ravindranath just donated",
            description: "₹5000"
        },
        {
            figureImageSrc: "/assets/images/Home/user/1.jpg",
            heading: "G. Ravindranath just donated",
            description: "₹5000"
        },
    ];

    return (
        <section>
            <div className="home-secA">
                <Swipers
                    className="home-secA-swiper"
                    spaceBetween={50}
                    slidesPerView={3.5}
                    imageWidth={69}
                    imageHeight={69}
                    data={swiperContent}
                    autoplay={true}
                    loop={true}
                    speed={3000}
                />
            </div>
        </section>
    );
};

export default TopDonation;