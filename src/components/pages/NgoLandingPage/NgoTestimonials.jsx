import React from 'react'
import Swipers from '../../molecules/Swipers'

const NgoTestimonials = () => {

    const cards = [
        {
            ngoImage: "/assets/images/NGO/icon/2.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            ngoName: "Snehalaya",
            ngoLocation: "Gurugram"
        },
        {
            ngoImage: "/assets/images/NGO/icon/2.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            ngoName: "Snehalaya",
            ngoLocation: "Gurugram"
        },
        {
            ngoImage: "/assets/images/NGO/icon/2.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            ngoName: "Snehalaya",
            ngoLocation: "Gurugram"
        },
        {
            ngoImage: "/assets/images/NGO/icon/2.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            ngoName: "Snehalaya",
            ngoLocation: "Gurugram"
        },
        {
            ngoImage: "/assets/images/NGO/icon/2.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            ngoName: "Snehalaya",
            ngoLocation: "Gurugram"
        },
        {
            ngoImage: "/assets/images/NGO/icon/2.png",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
            ngoName: "Snehalaya",
            ngoLocation: "Gurugram"
        }
    ]

    //  .parseInt, stringify, json.parce

    return (
        <>
            <div className="ngo-landing-secD">
                <div className="container">
                    <div className="heading">
                        <h2>NGo Testimonials</h2>
                        <h3>Trusted by NGOs Across the Country</h3>
                    </div>

                    <Swipers
                        className="ngo-testimonials"
                        swiperSlideCard="NgoTestimonialsCard"
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
        </>
    )
}

export default NgoTestimonials