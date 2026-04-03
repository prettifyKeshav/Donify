'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from '../../atoms/Button'

const Hero = () => {

    const [selectedCategory, setSelectedCategory] = useState('Disaster Relief Response')
    const [amount, setAmount] = useState(3000)
    const [customAmount, setCustomAmount] = useState('₹3,000')

    const categories = [
        'Disaster Relief Response',
        'Child Education Fund',
        'Medical Aid Program',
        'Food & Nutrition Drive',
    ]

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

    return (
        <>
            <div className="monthly-donar-listing-banner">
                <div className="banner">
                    <Image src="/assets/images/banner/monthly-donor-listing-banner.jpg" width={1394} height={414} alt='banner img'></Image>
                    <div className="banner-wrapper">
                        <div className="container">
                            <div className="box-wrapper">
                                <h1>Start a Ripple of Hope Today</h1>

                                <div className="donation-box__select-wrapper">
                                    <select
                                        className="donation-box__select"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                    >
                                        {categories.map((cat) => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
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

                                <Button className="donation-box__submit btn gradient-btn">
                                    Donate Monthly
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero