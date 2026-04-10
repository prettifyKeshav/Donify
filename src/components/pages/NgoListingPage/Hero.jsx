import React from 'react'
import Image from 'next/image'
import Select from '../../atoms/Select'
import "@/uploads/styles/component/custom-dropdown/custom-dropdown.css"

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

                            <div className="search-bar">
                                <form action="">

                                    <Select
                                        variant="quinary"
                                        label="Location"
                                        name="location"
                                        className="location-dropdown"
                                        id="location"
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

                                    <div className={`custom-search`}>
                                        <figure className="search-icon-wrap">
                                            <Image src="/assets/icon/search-gray.svg" alt="search" width={20} height={20} />
                                        </figure>

                                        <input
                                            type="search"
                                            placeholder='Search NGOs by name or cause'
                                            className="search-input-field"
                                        />
                                    </div>
                                    <button className='btn primary-btn'>
                                        Search
                                    </button>
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