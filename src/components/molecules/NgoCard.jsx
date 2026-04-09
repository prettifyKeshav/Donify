import React from 'react'
import Image from 'next/image'
import Button from '../atoms/Button'

const NgoCard = (
    {
        CardImg,
        NgoName,
        location,
        fundsRaised,
        donations,
        detailHref
    }
) => {
    return (
        <>
            <div className="ngo-card">
                <div className="top">
                    <figure>
                        <Image src={CardImg} width={97} height={97} alt='ico' />
                    </figure>
                </div>
                <figcaption>
                    <div className="ngo-card__header">
                        <h4>{NgoName}</h4>
                        <span className="ngo-card__verified">
                            <Image src="/assets/images/NGO/green-check-icon.svg" width={18} height={18} alt="verified" />
                        </span>
                    </div>

                    <div className="ngo-card__location">
                        <span className="ngo-card__location-icon"><Image src="assets/images/fundraisers-card/location-ico.svg" width={18} height={18} alt="verified" /></span>
                        <span>{location}</span>
                    </div>

                    <div className="flex-box">
                        <div className="col">
                            <p>Funds Raised</p>
                            <span>{fundsRaised}</span>
                        </div>
                        <span className='center-line'></span>
                        <div className="col">
                            <p>Donations</p>
                            <span>{donations}</span>
                        </div>
                    </div>

                    <div className="btn-group">
                        <Button className='btn primary-btn' href='/'>Donate Now</Button>
                        <Button className='btn secondary-border' href={detailHref}>Know More</Button>
                    </div>
                </figcaption>
            </div>
        </>
    )
}

export default NgoCard
