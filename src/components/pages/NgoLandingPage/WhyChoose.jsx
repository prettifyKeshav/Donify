import React from 'react'
import Image from 'next/image'

const WhyChoose = () => {

    const cards = [
        {
            figureImage: "/assets/images/NGO-Landing/why-chose-ico/1.svg",
            heading: "Wider Donor Reach",
            description: "Floods, cyclones, landslides, and earthquakes continue to disrupt lives across the country, leaving families without homes",
        },
        {
            figureImage: "/assets/images/NGO-Landing/why-chose-ico/2.svg",
            heading: "Trusted & Secure",
            description: "Our platform ensures safe and transparent transactions, giving donors confidence that their contributions reach the right causes.",
        },
        {
            figureImage: "/assets/images/NGO-Landing/why-chose-ico/3.svg",
            heading: "Marketing Support",
            description: "We help amplify your campaigns through digital marketing, social media promotion, and outreach strategies to attract more donors.",
        },
        {
            figureImage: "/assets/images/NGO-Landing/why-chose-ico/4.svg",
            heading: "Easy Campaign Setup",
            description: "Create and launch fundraising campaigns with simple steps, allowing you to focus more on your mission and impact.",
        }
    ]

    return (
        <>
            <div className="ngo-landing-secA">
                <div className="container">
                    <h2>why choose us</h2>
                    <h3>Empowering NGOs to Grow Faster</h3>

                    <div className="grid-box">
                        {
                            cards.map((item, index) => {
                                return (
                                    <div className="col" key={index}>
                                        <div className="col-wrap">
                                            <figure>
                                                <Image src={item.figureImage} height={57} width={57} alt="ico"></Image>
                                            </figure>
                                            <figcaption>
                                                <h4>{item.heading}</h4>
                                                <p>{item.description}</p>
                                            </figcaption>
                                        </div>
                                        <div className="plus">
                                            <Image src="/assets/icon/plus-ico.svg" width={14} height={14} alt='plus ico'></Image>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChoose