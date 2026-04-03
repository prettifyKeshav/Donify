import React from 'react'
import Image from 'next/image'
import "@/uploads/styles/fundraiser-listing/fundraiser-listing.css"

const DonationCard = (
    {
        userName,
        donationAmount,
        donationType
    }
) => {
    return (
        <>
            <div className="donation-card">
                <figure>
                    <Image src="/assets/images/user-avtar.png" width={42} height={42} alt='img'></Image>
                </figure>
                <figcaption>
                    <h3>{userName}</h3>
                    <div className="flex">
                        <p>{donationAmount}</p>
                        <span>{donationType}</span>
                    </div>
                </figcaption>
            </div>
        </>
    )
}

export default DonationCard