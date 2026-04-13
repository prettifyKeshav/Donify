import React from 'react'
import Button from '../../atoms/Button'
import Image from 'next/image'
const NgoNetwork = () => {
    return (
        <>
            <section>
                <div className="ngo-landing-secC" id='Ngo_Network'>
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <h2>NGO Network</h2>
                                <h3>A Growing Network of NGOs Across Pan India</h3>
                                <p>Our growing network of verified NGOs spans across the length and breadth of India, creating impact in diverse communities and sectors. From metropolitan cities to rural and underserved regions, these organizations are working tirelessly in areas such as education, healthcare, environment, and social welfare.</p>
                                <Button className='btn primary-btn' href="" >Enroll Now</Button>
                            </div>
                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/NGO-Landing/india-map.png" height={548} width={495} alt="map-img" ></Image>

                                    <div className="pointer first">
                                        <span className="tooltip">Delhi</span>
                                    </div>

                                    <div className="pointer second">
                                        <span className="tooltip">Rajasthan</span>
                                    </div>

                                    <div className="pointer third">
                                        <span className="tooltip">Uttar Pradesh</span>
                                    </div>

                                    <div className="pointer fourth">
                                        <span className="tooltip">Madhya Pradesh</span>
                                    </div>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NgoNetwork