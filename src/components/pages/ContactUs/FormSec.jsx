"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Select from '../../atoms/Select'

const FormSec = () => {


    const [formData, setFormData] = useState({
        Selectedcity: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        const inputBoxes = document.querySelectorAll(".form-control");
        const handleFocus = function () {
            this.closest(".form-group")?.classList.add("active");
            this.classList.add("valid");
        };
        const handleBlur = function () {
            if (!this.value.trim()) {
                this.closest(".form-group")?.classList.remove("active");
                this.classList.remove("valid");
            }
        };
        inputBoxes.forEach((inputBox) => {
            inputBox.addEventListener("focus", handleFocus);
            inputBox.addEventListener("blur", handleBlur);
        });
        return () => {
            inputBoxes.forEach((inputBox) => {
                inputBox.removeEventListener("focus", handleFocus);
                inputBox.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

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