import React from 'react'
import Hero from './Hero'
import "@/uploads/styles/about-us/about-us.css"
import Empowering from './Empowering'
import MissionVision from './MissionVision'
import OurValues from './OurValues'
import DirectorMessage from './DirectorMessage'

const AboutUsPage = () => {
    return (
        <>
            <Hero />
            <Empowering />
            <MissionVision />
            <OurValues />
            <DirectorMessage />
        </>

    )
}

export default AboutUsPage