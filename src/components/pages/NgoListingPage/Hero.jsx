import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <div className="ngo-listing-banner">
                <div className="banner">
                    <Image src="/assets/images/banner/ngo-listing-banner.png" width={1394} height={414} alt='banner img'></Image>
                    <div className="banner-wrapper">
                        <div className="container">
                            <h1>Find NGOs</h1>
                            <p>Find fundraisers by NGO’s name, location, title, or keyword</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero