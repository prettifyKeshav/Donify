import React from 'react'
import Swipers from '../../molecules/Swipers'
import Button from '../../atoms/Button'

const TransformativeJourney = () => {

    const cards = [
        {
            figureImage: "/assets/images/Home/transformative-journeys/1.jpg",
            title: "Heroes like you helped my son win his battle."
        },
        {
            figureImage: "/assets/images/Home/transformative-journeys/2.jpg",
            title: "Heroes like you helped my son win his battle."
        },
        {
            figureImage: "/assets/images/Home/transformative-journeys/3.jpg",
            title: "Heroes like you helped my son win his battle."
        },
        {
            figureImage: "/assets/images/Home/transformative-journeys/1.jpg",
            title: "Heroes like you helped my son win his battle."
        },
        {
            figureImage: "/assets/images/Home/transformative-journeys/2.jpg",
            title: "Heroes like you helped my son win his battle."
        },
        {
            figureImage: "/assets/images/Home/transformative-journeys/3.jpg",
            title: "Heroes like you helped my son win his battle."
        },
    ]

    return (
        <>
            <section>
                <div className="home-secJ">
                    <div className="container">
                        <h2>Transformative Journeys with Our NGOs</h2>

                        <Swipers
                            className="home-secJ-swiper"
                            swiperSlideCard="JourneysCard"
                            slidesPerView={2.4}
                            spaceBetween={20}
                            speed={700}
                            centeredSlides={true}
                            navigation={true}
                            autoplay={false}
                            loop={true}
                            pagination={false}
                            data={cards}
                            swiperNavBtn="white-btn"
                            swiperNavClass="center-full-full"
                            effectcoverflow={true}
                            coverflowConfig={{
                                rotate: -34,
                                stretch: 40,
                                depth: 165,
                                modifier: 1,
                                slideShadows: true,
                            }}
                        />

                        <div className="bottom">
                            <Button href="/" className="btn primary-btn">
                                Start Fundraising for Free
                            </Button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TransformativeJourney