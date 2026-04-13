"use client"
import React, { useEffect, useState } from 'react'
import "@/uploads/styles/donate-now/donate-now.css"
import Image from 'next/image'

const DonateNowPage = () => {
    const [amount, setAmount] = useState(3000)
    const [customAmount, setCustomAmount] = useState('₹3,000')

    const presetAmounts = [
        { label: '₹1,000/M', value: 1000 },
        { label: '₹3,000/M', value: 3000, popular: true },
        { label: '₹5,000/M', value: 5000 },
    ]

    const handlePreset = (value) => {
        setAmount(value)
        setCustomAmount(`₹${value.toLocaleString('en-IN')}`)
    }

    const handleCustomInput = (e) => {
        const raw = e.target.value.replace(/[^0-9]/g, '')
        setAmount(Number(raw))
        setCustomAmount(raw ? `₹${Number(raw).toLocaleString('en-IN')}` : '')
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
                <div className="donate-now-secA">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">

                                <div className="col-child">
                                    <h2>Donation amount</h2>
                                    <div className="donation-box__presets">
                                        <span className="most-popular">
                                            MOST POPULAR
                                        </span>
                                        {presetAmounts.map((preset) => (
                                            <button
                                                key={preset.value}
                                                className={`donation-box__preset-btn ${amount === preset.value ? 'active' : ''}`}
                                                onClick={() => handlePreset(preset.value)}
                                            >
                                                {preset.popular}
                                                {preset.label}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="donation-box__input-wrapper">
                                        <input
                                            type="text"
                                            className="donation-box__input"
                                            value={customAmount}
                                            onChange={handleCustomInput}
                                            placeholder="₹0"
                                        />
                                    </div>
                                </div>

                                <div className="col-child">
                                    <h2>Your Details</h2>
                                    <form action="" className="form form-grid" >
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" id="name" />
                                            <label htmlFor="name">Full Name*</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="tel" name="phone" className="form-control" id="phone" />
                                            <label htmlFor="email">Phone*</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" id="email" />
                                            <label htmlFor="email">Email*</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" name="" className="form-control" id="" />
                                            <label htmlFor="">Billing Address*</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="tel" name="" className="form-control" id="" />
                                            <label htmlFor="">Pincode*</label>
                                        </div>

                                        <div className="form-group">
                                            <input type="tel" name="" className="form-control" id="" />
                                            <label htmlFor="">PAN Number*</label>
                                        </div>

                                        <div className="form-group full">
                                            <textarea name="message" id="message" className="form-control"></textarea>
                                            <label htmlFor="message">Message*</label>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/fundraisers-card/1.jpg" width={381} height={226} alt="ico"></Image>
                                </figure>
                                <h4>6 years old child of Sivaprasad needs your help fight Brain Stem</h4>

                                <div className="mid">
                                    <div className="flex">
                                        <p>Donation Amount</p>
                                        <p>₹1,500</p>
                                    </div>
                                </div>
                                <div className="total">
                                    <div className="flex">
                                        <p>Total Donation</p>
                                        <p>₹1,500</p>
                                    </div>
                                </div>
                                <button type='button' className="btn secondary-btn">Proceed to pay ₹1,500</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DonateNowPage