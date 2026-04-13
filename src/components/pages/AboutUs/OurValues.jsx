import Swipers from '@/src/components/molecules/Swipers'
import React from 'react'

const OurValues = () => {

    const cards = [
        {
            figureImage: "/assets/images/about/value-ico/1.svg",
            heading: "Compassion",
            description: "We lead with empathy, understanding the needs of others and acting with kindness in everything we do."
        },
        {
            figureImage: "/assets/images/about/value-ico/2.svg",
            heading: "Integrity",
            description: "We are transparent, honest, and accountable—ensuring trust in every action and decision."
        },
        {
            figureImage: "/assets/images/about/value-ico/3.svg",
            heading: "Inclusivity",
            description: "We believe everyone deserves equal opportunities, regardless of background, identity, or circumstance."
        },
        {
            figureImage: "/assets/images/about/value-ico/1.svg",
            heading: "Sustainability",
            description: "We are committed to creating long-term impact by promoting responsible practices that support communities, protect resources, and ensure a better future for generations to come."
        }
    ]

    return (
        <>
            <section>
                <div className="about-secC">
                    <div className="container">
                        <h2>Our Values</h2>

                        <Swipers
                            className="more-similar-missions"
                            swiperSlideCard="ValuesCards"
                            imageWidth={70}
                            imageHeight={70}
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

export default OurValues