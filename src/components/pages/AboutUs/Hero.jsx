import React from 'react'
import Image from 'next/image'
import Button from '@/src/components/atoms/Button'

const Hero = () => {
    return (
        <section>
            <div className="about-banner">
                <div className="container">
                    <div className="flex-box">
                        <div className="col">
                            <h2>about us</h2>
                            <h1>A Platform Built to Empower <span>Change and Inspire Giving</span></h1>
                            <Button className='btn secondary-btn' >Start a fundraiser</Button>
                        </div>
                        <div className="col">
                            <figure>
                                <Image src="/assets/images/about/about-banner.jpg" width={546} height={362} alt="ico" ></Image>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero