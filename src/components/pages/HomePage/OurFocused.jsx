import Button from "../../atoms/Button"
import Swipers from "../../molecules/Swipers"

const OurFocused = () => {

    const swiperContent = [
        {
            figureImageSrc: "/assets/images/Home/OurFocused/2.png"
        },
        {
            figureImageSrc: "/assets/images/Home/OurFocused/1.png"
        },
        {
            figureImageSrc: "/assets/images/Home/OurFocused/2.png"
        },
        {
            figureImageSrc: "/assets/images/Home/OurFocused/1.png"
        }

    ]


    return (
        <>
            <div className="home-secC">
                <div className="container">
                    <div className="flex-box">
                        <div className="content">
                            <h2>Our Focused Core Areas</h2>

                            <h3>Rural Eye Health Programme</h3>
                            <p>Donify Rural Eye Health Programme is dedicated to improving eye health in underserved rural communities by creating awareness, delivering accessible and high-quality eye care services, and working towards the elimination of avoidable blindness.</p>
                            <Button className="btn primary-btn" href="/">Donate Now</Button>

                            <div className="flex-box">
                                <div className="col">
                                    <h6>40,45,455</h6>
                                    <p>Number of Eye Screenings</p>
                                </div>
                                <span></span>
                                <div className="col">
                                    <h6>18,46,144</h6>
                                    <p>Number of People</p>
                                </div>
                                <span></span>
                                <div className="col">
                                    <h6>51,000</h6>
                                    <p>Donors</p>
                                </div>
                            </div>
                        </div>

                        <Swipers
                            className="home-secC-swiper"
                            autoplay={false}
                            loop={false}
                            data={swiperContent}
                            imageWidth={419}
                            imageHeight={449}
                            slidesPerView={1.5}
                            spaceBetween={30}
                            speed={1000}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}

export default OurFocused