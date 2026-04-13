"use client"
import React from 'react'
import Button from '../../atoms/Button'
import Image from 'next/image'
import { useModalStore } from '@/store/modelStore'

const Hero = () => {
    const openLogin = useModalStore((state) => state.openLogin)

    return (
        <>
            <div className="ngo-landing-banner">
                <div className="container">
                    <div className="flex-box">
                        <figcaption>
                            <h1>Turn Your Cause Into Impact<span>—Start Raising Funds Today</span></h1>
                            <p>Onboard on Donify and create impact by raising funds for your initiatives</p>
                            <button className='btn secondary-btn' href='/' onClick={openLogin}>Enroll your NGO on Donify</button>
                        </figcaption>
                        <figure>
                            <Image src='/assets/images/NGO-Landing/ngo-landing-banner.png' height={428} width={314} alt="user ico" ></Image>
                            <div className="vector-img rotate-infinite">
                                <Image className='' src="/assets/vector/logo-vector.png" width={436} height={404} alt='vector'></Image>
                            </div>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero