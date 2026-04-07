import React from 'react'
import Image from 'next/image'

const NgoTestimonialsCard = (
    {
        ngoImage,
        description,
        ngoName,
        ngoLocation
    }
) => {
    return (
        <>
            <div className="ngo-testimonials-card">
                <div className="top">
                    <figure>
                        <Image src={ngoImage} height={58} width={58} alt="img"></Image>
                    </figure>
                    <div className="qoma">
                        <Image src="/assets/images/NGO/qoma-2.png" height={44} width={58} alt='qoma'></Image>
                    </div>
                </div>

                <p>{description}</p>

                <div className="bottom">
                    <h4>{ngoName}</h4>
                    <div className="flex">
                        <figure>
                            <Image src="/assets/icon/location-primary.svg" width={58} height={44} alt='ico'></Image>
                        </figure>
                        <p>{ngoLocation}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NgoTestimonialsCard