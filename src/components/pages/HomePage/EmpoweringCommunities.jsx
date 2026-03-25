import React from 'react'
import Hero from '../../organisms/Hero'

const EmpoweringCommunities = () => {
    return (
        <>
            <section>
                <div className="home-secI">
                    <Hero
                        className="hero-banner"
                        bgType="image"
                        bgSrc="/assets/images/Home/secI-banner.jpg"
                        secondTitile="Empowering Communities. Transforming India."
                        description="Donate to causes you care about or launch your own fundraiser"
                        btnChildren="Start a fundraiser"
                        btnClassName="btn primary-btn"
                        btnChildren2="Donate to a fundraiser"
                        btnClassName2="btn secondary-btn-white"
                        firstBtnHref="/"
                        secondBtnHref="/"
                    />
                </div>
            </section>
        </>
    )
}

export default EmpoweringCommunities