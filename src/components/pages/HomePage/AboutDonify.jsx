import Image from "next/image"
import Button from "../../atoms/Button"

const AboutDonify = () => {
    return (
        <section>
            <div className="home-secB">
                <div className="container">
                    <div className="flex-box">
                        <figure>
                            <Image className="rotate-infinite-slow" src="/assets/images/logo-D-wrapper.svg" width={436} height={404} alt="Donify ico"></Image>
                            <Image className="d-logo" src="/assets/images/logo-D.svg" width={117} height={129} alt="Donify ico"></Image>
                        </figure>

                        <div className="content">
                            <h2>About <span>Donify</span></h2>
                            <p>Donify is not a traditional NGO in the sense of a charity running its own programs. Rather, it’s a donation platform or giving hub designed to connect donors, communities, and non-profit organizations by making donating simple and impactful.</p>
                            <div className="flex-box">
                                <div className="col">
                                    <figure>
                                        <Image src="/assets/images/Home/About-sec/1.svg" height={57} width={57} alt="ico"></Image>
                                    </figure>
                                    <div className="content">
                                        <h6>2000+</h6>
                                        <p>Donors</p>
                                    </div>
                                </div>

                                <span></span>

                                <div className="col">
                                    <figure>
                                        <Image src="/assets/images/Home/About-sec/2.svg" height={57} width={57} alt="ico"></Image>
                                    </figure>
                                    <div className="content">
                                        <h6>25+</h6>
                                        <p>Causes Supported</p>
                                    </div>
                                </div>
                                
                                <span></span>

                                <div className="col">
                                    <figure>
                                        <Image src="/assets/images/Home/About-sec/3.svg" height={57} width={57} alt="ico"></Image>
                                    </figure>
                                    <div className="content">
                                        <h6>500+</h6>
                                        <p>Verified NGO</p>
                                    </div>
                                </div>
                            </div>
                            <Button className="btn primary-btn" href="/about-us">Read More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutDonify