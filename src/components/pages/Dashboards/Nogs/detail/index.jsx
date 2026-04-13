"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Select from '@/src/components/atoms/Select'

const DashboardAddNgos = () => {
    const [resumeFile, setResumeFile] = useState(null);

    const [formData, setFormData] = useState(
        {
            BasicInformation: [
                {
                    categories: "",
                    location: ""
                }
            ]
        }
    )

    const HandleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleFileChange = (e) => {
        setResumeFile(e.target.files[0]);
    };

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
            <div className="dashboard-add-ngo">
                <Link href="/ngos" className="back">
                    <figure>
                        <Image src="/assets/icon/back-btn.svg" width={14} height={18} alt="back ico"></Image>
                    </figure>
                    <h3>NGO Details</h3>
                </Link>

                <div className="group">
                    <div className="head">
                        <h3>Basic Information</h3>
                    </div>

                    <div className="body">
                        <form action="" className="form form-grid" >
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">NGO Name</label>
                            </div>

                            <div className="form-group">
                                <Select
                                    variant="quinary"
                                    label="Categories"
                                    name="categories"
                                    className="select-dropdown"
                                    id="categories"
                                    value={formData.categories}
                                    onChange={HandleChange}
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
                            </div>

                            <div className="form-group">
                                <Select
                                    variant="quinary"
                                    label="Location"
                                    name="location"
                                    className="select-dropdown"
                                    id="location"
                                    value={formData.location}
                                    onChange={HandleChange}
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
                            </div>

                            <div className="form-group file-input">
                                <input
                                    type="file"
                                    id="careerResume"
                                    className="form-control"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                />
                                <div className="file-name"></div>
                            </div>

                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">Year of Foundation</label>
                            </div>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">NGO Overview</label>
                            </div>

                            <div className="form-group full">
                                <textarea name="description" id="description" className="form-control"></textarea>
                                <label htmlFor="description">Description</label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="group">
                    <div className="head">
                        <h3>Funds Utilization</h3>
                    </div>

                    <div className="body">
                        <form action="" className="form form-grid" >
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">Image</label>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="group">
                    <div className="head">
                        <h3>Gallery</h3>
                    </div>

                    <div className="body">
                        <form action="" className="form form-grid" >
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">Image</label>
                            </div>
                        </form>
                    </div>

                </div>

                <div className="group">
                    <div className="head">
                        <h3>Testimonials</h3>
                    </div>

                    <div className="body">
                        <form action="" className="form form-grid" >
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">NGO Name</label>
                            </div>

                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">Year of Foundation</label>
                            </div>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">NGO Overview</label>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashboardAddNgos