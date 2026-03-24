import React from 'react'
import Button from '../../atoms/Button'
import Image from 'next/image'

const RaisingFunds = () => {
    return (
        <>
            <section>
                <div className="home-secG">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <h2>Start Raising Funds for Your Cause</h2>
                                <p>Onboard on Donify and create impact by raising funds for your initiatives</p>

                                <div className="btn-group">
                                    <Button className='btn primary-btn' >Enroll your NGO on Donify</Button>
                                    <Button className='btn secondary-btn' >Raise funds for a listed NGO</Button>
                                </div>
                            </div>
                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/Home/phone-vector.png" height="400" width="300" alt="phone vector" ></Image>

                                    <figcaption>
                                        <div className="logo">
                                            <Image src="/assets/images/donify-ico.svg" height="77" width="84" alt="donify ico" ></Image>
                                        </div>
                                        <h3>₹17,39,440</h3>
                                        <Button href='/' className='btn primary-border' >Donate Now</Button>
                                    </figcaption>
                                </figure>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RaisingFunds