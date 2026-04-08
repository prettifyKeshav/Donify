import React from 'react'
import LandingHeader from '../organisms/LandingHeader'
import Footer from '../organisms/Footer'

const NgoTemplate = ({ children }) => {
    return (
        <>
            <LandingHeader />
            {children}
            <Footer />
        </>
    )
}

export default NgoTemplate