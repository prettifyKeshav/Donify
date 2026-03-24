import React from 'react'
import Swipers from '../../molecules/Swipers'
import Image from 'next/image'

const NGOs = () => {

    const swiperContent = [
        {
            figureImageSrc: "/assets/images/NGO/icon/1.png",
            heading: "Vimukti Sanstha"
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/2.png",
            heading: "Snehalaya"
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/3.png",
            heading: "Snehalaya"
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/4.png",
            heading: "Christel House India"
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/5.png",
            heading: "Unique Welfare Foundation "
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/1.png",
            heading: "Vimukti Sanstha"
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/2.png",
            heading: "Snehalaya"
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/3.png",
            heading: "Snehalaya"
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/4.png",
            heading: "Christel House India"
        },
        {
            figureImageSrc: "/assets/images/NGO/icon/5.png",
            heading: "Unique Welfare Foundation "
        },
    ]

    return (
        <>
            <section>
                <div className="pin-line">
                    <figure>
                        <Image src="assets/images/NGO/helping-hand-ico.svg" width="55" height="55" alt="helping hand image" ></Image>
                    </figure>
                </div>
                <div className="home-secF">
                    <div className="banner">
                        <img className='banner-img' src="/assets/images/NGO/ngo-banner.jpg" alt="banner" />
                        <div className="banner-wrapper">
                            <div className="container">
                                <div className="heading">
                                    <h2>Working Hand-in-Hand with Trusted NGOs</h2>
                                    <p>Supporting credible nonprofits for 10+ years and counting</p>
                                </div>

                                <Swipers
                                    className="ngo-swiper"
                                    autoplay={false}
                                    loop={false}
                                    data={swiperContent}
                                    imageWidth={167}
                                    imageHeight={194}
                                    slidesPerView={6}
                                    spaceBetween={30}
                                    speed={700}
                                    navigation={true}
                                    pagination={true}
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NGOs