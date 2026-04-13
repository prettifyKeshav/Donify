"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Select from '../../atoms/Select'
// import "@/uploads/styles/component/custom-dropdown/custom-dropdown.css"

const FormSec = () => {

    const [formData, setFromData] = useState({
        Selectedcity: "",
    })
    // console.log(Selectedcity)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFromData({ ...formData, [name]: value })
    }

    return (
        <>
            <section>
                <div className="banner contact-secB">
                    <Image src="/assets/images/contact/banner.jpg" width={1280} height={626} alt="ico"></Image>
                    <div className="banner-wrapper">
                        <div className="container">
                            <div className="form-sec">
                                <h2>Take the First Step Towards Change</h2>

                                <form action="" className="form form-grid" >
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" id="name" />
                                        <label htmlFor="name">Name*</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" id="email" />
                                        <label htmlFor="email">Email*</label>
                                    </div>

                                    <div className="form-group">
                                        <input type="tel" name="phone" className="form-control" id="phone" />
                                        <label htmlFor="email">Phone*</label>
                                    </div>

                                    <div className="form-group">
                                        <Select
                                            variant="quinary"
                                            label="City"
                                            name="city"
                                            className="select-dropdown"
                                            id="city"
                                            value={formData.Selectedcity}
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
                                            ]}
                                        />
                                    </div>

                                    <div className="form-group full">
                                        <textarea name="message" id="message" className="form-control"></textarea>
                                        <label htmlFor="message">Message*</label>
                                    </div>

                                    <div className="submit-btn full">
                                        <button className="btn secondary-btn" type="button">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FormSec