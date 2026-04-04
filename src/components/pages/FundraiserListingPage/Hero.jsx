"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import SelectDropdown from '../../atoms/SelectDropdown'

const Hero = () => {
    
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [selectedNgo, setSelectedNgo] = useState(null);

    const INDIAN_STATES_OPTIONS = [
        { value: "All India", label: "All India" },
        { value: "Andhra Pradesh", label: "Andhra Pradesh" },
        { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
        { value: "Assam", label: "Assam" },
        { value: "Bihar", label: "Bihar" },
        { value: "Chhattisgarh", label: "Chhattisgarh" },
        { value: "Goa", label: "Goa" },
        { value: "Gujarat", label: "Gujarat" },
        { value: "Haryana", label: "Haryana" },
        { value: "Himachal Pradesh", label: "Himachal Pradesh" },
        { value: "Jharkhand", label: "Jharkhand" },
        { value: "Karnataka", label: "Karnataka" },
        { value: "Kerala", label: "Kerala" },
        { value: "Madhya Pradesh", label: "Madhya Pradesh" },
        { value: "Maharashtra", label: "Maharashtra" },
        { value: "Manipur", label: "Manipur" },
        { value: "Meghalaya", label: "Meghalaya" },
        { value: "Mizoram", label: "Mizoram" },
        { value: "Nagaland", label: "Nagaland" },
        { value: "Odisha", label: "Odisha" },
        { value: "Punjab", label: "Punjab" },
        { value: "Rajasthan", label: "Rajasthan" },
        { value: "Sikkim", label: "Sikkim" },
        { value: "Tamil Nadu", label: "Tamil Nadu" },
        { value: "Telangana", label: "Telangana" },
        { value: "Tripura", label: "Tripura" },
        { value: "Uttar Pradesh", label: "Uttar Pradesh" },
        { value: "Uttarakhand", label: "Uttarakhand" },
        { value: "West Bengal", label: "West Bengal" },
        { value: "Andaman & Nicobar Islands", label: "Andaman & Nicobar Islands" },
        { value: "Chandigarh", label: "Chandigarh" },
        { value: "Dadra & Nagar Haveli", label: "Dadra & Nagar Haveli" },
        { value: "Daman & Diu", label: "Daman & Diu" },
        { value: "Delhi", label: "Delhi" },
        { value: "Jammu & Kashmir", label: "Jammu & Kashmir" },
        { value: "Ladakh", label: "Ladakh" },
        { value: "Lakshadweep", label: "Lakshadweep" },
        { value: "Puducherry", label: "Puducherry" },
    ];

    const NGOS_OPTIONS = [
        { id: 1, value: 'CRY – Child Rights and You', label: 'Child Welfare' },
        { id: 2, value: 'Goonj', label: 'Disaster Relief' },
        { id: 3, value: 'HelpAge India', label: 'Elder Care' },
        { id: 4, value: 'Smile Foundation', label: 'Education & Health' },
        { id: 5, value: 'Akshaya Patra', label: 'Mid-Day Meals' },
    ]

    return (
        <>
            <div className="fundraiser-listing-banner">
                <div className="banner">
                    <Image src="/assets/images/Fundraisers-Page/product-listing-banner.png" width={1394} height={414} alt='banner img'></Image>
                    <div className="banner-wrapper">
                        <div className="container">
                            <h1>Find Fundraisers</h1>
                            <p>Find fundraisers by NGO’s name, location, title, or keyword</p>

                            <div className="search-bar">
                                <form action="">
                                    <SelectDropdown
                                        options={INDIAN_STATES_OPTIONS}
                                        value={selectedLocation}
                                        onChange={setSelectedLocation}
                                        placeholder="Location"
                                    />

                                    <SelectDropdown
                                        options={NGOS_OPTIONS}
                                        value={selectedNgo}
                                        onChange={setSelectedNgo}
                                        placeholder="NGOs"
                                    />
                                    <input className='search-input' type="search" placeholder='Search NGOs or Fundraiser' />    
                                    <button type='button' className='search-btn'>Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero