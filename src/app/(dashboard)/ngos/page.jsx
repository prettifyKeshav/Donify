import Button from '@/src/components/atoms/Button'
import React from 'react'
import Image from 'next/image';


const page = () => {

    const cards = [
        {
            CardImg: "/assets/images/NGO/icon/1.png",
            NgoName: "Vimukti Sanstha",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "education"
        },
        {
            CardImg: "/assets/images/NGO/icon/2.png",
            NgoName: "Snehalaya",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "children"
        },
        {
            CardImg: "/assets/images/NGO/icon/3.png",
            NgoName: "Christel House India",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "children"
        },
        {
            CardImg: "/assets/images/NGO/icon/4.png",
            NgoName: "Unique Welfare Foundation",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "children"
        },
        {
            CardImg: "/assets/images/NGO/icon/5.png",
            NgoName: "Vimukti Sanstha",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "women"
        },
        {
            CardImg: "/assets/images/NGO/icon/1.png",
            NgoName: "Christel House India",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngo-detail",
            Datacategory: "education"
        }
    ];

    // const INDIAN_STATES = [
    //     { value: "haryana", label: "Haryana" },
    //     { value: "delhi", label: "Delhi" },
    //     { value: "maharashtra", label: "Maharashtra" },
    //     { value: "karnataka", label: "Karnataka" },
    //     { value: "uttar_pradesh", label: "Uttar Pradesh" },
    //     { value: "rajasthan", label: "Rajasthan" },
    // ];


    return (
        <>
            <div className="my-ngos">
                <div className="flex-box">
                    <h2>My NGOs</h2>

                    <div className="right">
                        {/* <CustomDropdown
                            label="Location"
                            options={INDIAN_STATES}
                            placeholder="Select State"
                        /> */}

                        <Button className='btn secondary-btn'>Add NGO</Button>
                    </div>
                </div>

                <div className="grid-box">
                    {cards.map((item, index) => (
                        <div className="ngo-card" key={index}>
                            <div className="top">
                                <figure>
                                    <Image src={item.CardImg} width={97} height={97} alt='ico' />
                                </figure>
                            </div>
                            <figcaption>
                                <div className="ngo-card__header">
                                    <h4>{item.NgoName}</h4>
                                    <span className="ngo-card__verified">
                                        <Image src="/assets/images/NGO/green-check-icon.svg" width={18} height={18} alt="verified" />
                                    </span>
                                </div>

                                <div className="ngo-card__location">
                                    <span className="ngo-card__location-icon"><Image src="assets/images/fundraisers-card/location-ico.svg" width={18} height={18} alt="verified" /></span>
                                    <span>{item.location}</span>
                                </div>

                                <div className="flex-box">
                                    <div className="col">
                                        <p>Funds Raised</p>
                                        <span>{item.fundsRaised}</span>
                                    </div>
                                    <span className='center-line'></span>
                                    <div className="col">
                                        <p>Donations</p>
                                        <span>{item.donations}</span>
                                    </div>
                                </div>

                                <div className="btn-group">
                                    <Button className='btn primary-btn' href='/'>Edit Info</Button>
                                    <Button className='btn secondary-border' href={item.detailHref}>View Details</Button>
                                </div>
                            </figcaption>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default page