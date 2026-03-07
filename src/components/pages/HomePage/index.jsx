import "../../../../uploads/styles/home/home.css"
import Hero from "../../organisms/Hero"
import AboutDonify from "./AboutDonify"
import OurFocused from "./OurFocused"
import TopDonation from "./TopDonation"

const HomePage = () => {
    return (
        <>
            <Hero
                className="hero-banner"
                bgType="video"
                bgSrc="/assets/video/home-banner.mp4"
                title="India’s most trusted online donation platform"
                description="Donify is a purpose-driven crowdfunding platform enabling individuals, medical causes, and NGOs to raise funds efficiently in India, supported by strong governance, transparency, and donor confidence."
                btnChildren="Start a fundraiser"
                btnClassName="btn primary-btn"
            />
            <TopDonation />
            <AboutDonify />
            <OurFocused />

        </>
    )
}

export default HomePage