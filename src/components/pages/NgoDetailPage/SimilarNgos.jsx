import React from 'react'
import Swipers from '../../molecules/Swipers';

const SimilarNgos = () => {

    const cards = [
        {
            CardImg: "/assets/images/NGO/icon/1.png",
            NgoName: "Vimukti Sanstha",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail"
        },
        {
            CardImg: "/assets/images/NGO/icon/2.png",
            NgoName: "Snehalaya",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail"
        },
        {
            CardImg: "/assets/images/NGO/icon/3.png",
            NgoName: "Christel House India",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail"
        },
        {
            CardImg: "/assets/images/NGO/icon/4.png",
            NgoName: "Unique Welfare Foundation",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail"
        },
        {
            CardImg: "/assets/images/NGO/icon/5.png",
            NgoName: "Vimukti Sanstha",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail"
        },
        {
            CardImg: "/assets/images/NGO/icon/1.png",
            NgoName: "Christel House India",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail"
        }
    ];

    return (
        <>
            <section>
                <div className="similar-ngos">
                    <div className="container">
                        <h2>Similar NGOs</h2>
                        <Swipers
                            className="more-similar-ngos"
                            swiperSlideCard="NgoCard"
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

export default SimilarNgos