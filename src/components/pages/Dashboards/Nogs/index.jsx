"use client"
import React, { useState } from 'react'
import Button from '@/src/components/atoms/Button'
import Image from 'next/image';
import Select from '@/src/components/atoms/Select';
const DashboardNgos = () => {

    const [formData, setFormData] = useState({
        category: "",
        location: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const cards = [
        {
            CardImg: "/assets/images/NGO/icon/1.png",
            NgoName: "Vimukti Sanstha",
            location: 'Gurugram',
            fundsRaised: "₹12,32,809",
            donations: "41,902",
            detailHref: "/ngos/slug",
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

    return (
        <>
            <div className="my-ngos">
                <div className="flex-box">
                    <h2>My NGOs</h2>

                    <div className="right">

                        <div className={`custom-search`}>
                            <figure className="search-icon-wrap">
                                <Image src="/assets/icon/search-gray.svg" alt="search" width={20} height={20} />
                            </figure>

                            <input
                                type="search"
                                placeholder='Search'
                                className="search-input-field"
                            />
                        </div>

                        <Select
                            variant="quinary"
                            label="Category"
                            name="category"
                            className="category-dropdown"
                            id="category"
                            value={formData.category}
                            onChange={handleChange}
                            options={[
                                "Education",
                                "Children",
                                "Women",
                                "Elderly",
                                "Community",
                                "Poverty",
                                "Differently Abled",
                                "Disaster Relief",
                                "Environment",
                                "Arts & Culture"
                            ]}
                        />


                        <Select
                            variant="quinary"
                            label="Location"
                            name="location"
                            className="location-dropdown"
                            id="location"
                            value={formData.location}
                            onChange={handleChange}
                            options={[
                                "Andhra Pradesh",
                                "Arunachal Pradesh",
                                "Assam",
                                "Bihar",
                                "Chhattisgarh",
                                "Delhi",
                                "Goa",
                                "Gujarat",
                                "Haryana",
                                "Himachal Pradesh",
                                "Jharkhand",
                                "Karnataka",
                                "Kerala",
                                "Madhya Pradesh",
                                "Maharashtra",
                                "Manipur",
                                "Meghalaya",
                                "Mizoram",
                                "Nagaland",
                                "Odisha",
                                "Punjab",
                                "Rajasthan",
                                "Sikkim",
                                "Tamil Nadu",
                                "Telangana",
                                "Tripura",
                                "Uttar Pradesh",
                                "Uttarakhand",
                                "West Bengal"
                            ]}
                        />
                        <Button className='btn secondary-btn' href='/ngos/slug'>Add NGO</Button>
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

export default DashboardNgos