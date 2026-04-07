import React from 'react'
import Hero from './Hero'
import "@/uploads/styles/ngo-ladning/ngo-landing.css"
import "@/uploads/styles/component/component.css"
import FaqSection from './FaqSection'
import WhyChoose from './WhyChoose'
import HowItWorks from './HowItWorks'
import NgoNetwork from './NgoNetwork'
import NgoTestimonials from './NgoTestimonials'

const NgoLandingPage = () => {
    return (
        <>
            <Hero />
            <WhyChoose />
            <HowItWorks />
            <NgoNetwork />
            <NgoTestimonials />
            <FaqSection />
        </>
    )
}

export default NgoLandingPage