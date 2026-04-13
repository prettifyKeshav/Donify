import "../../../../uploads/styles/home/home.css"
import Hero from "../../organisms/Hero"
import AboutDonify from "./AboutDonify"
import EmpoweringCommunities from "./EmpoweringCommunities"
import Featured from "./Featured"
import MonthlyDoner from "./MonthlyDoner"
import NGOs from "./NGOs"
import OurFocused from "./OurFocused"
import OurPartners from "./OurPartners"
import RaisingFunds from "./RaisingFunds"
import TopDonation from "./TopDonation"
import TransformativeJourney from "./TransformativeJourney"
import TrendingFundraisers from "./TrendingFundraisers"

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
                firstBtnHref="/ngo-listing"
            />
            <TopDonation />
            <AboutDonify />
            <OurFocused />
            <MonthlyDoner />
            <TrendingFundraisers />
            <NGOs />
            <RaisingFunds />
            <OurPartners />
            <EmpoweringCommunities />
            <TransformativeJourney />
            <Featured />
        </>
    )
}

export default HomePage