import React from 'react'
import Image from 'next/image'
import "@/uploads/styles/fundraiser-listing/fundraiser-listing.css"
import "@/uploads/styles/component/component.css"
import Button from '../../atoms/Button'
import DonationCard from './DonationCard'
import Swipers from '../../molecules/Swipers'
import FaqSection from './FaqSection'
import SimilarFundraisers from './SimilarFundraisers'

const FundraiserDetailPage = () => {

    const cards = [
        {
            figureImageSrc: "/assets/images/monthlydoner/1.jpg",
            imageWidth: "830",
            imageHeight: "462",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/2.jpg",
            imageWidth: "830",
            imageHeight: "462",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/3.jpg",
            imageWidth: "830",
            imageHeight: "462",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/1.jpg",
            imageWidth: "830",
            imageHeight: "462",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/2.jpg",
            imageWidth: "830",
            imageHeight: "462",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/3.jpg",
            imageWidth: "830",
            imageHeight: "462",
        }
    ];

    return (
        <>
            <div className="fundraiser-detail">
                <div className="container">
                    <div className="flex-box">
                        <div className="left-col">
                            <div className="card-tags">
                                <span className="verified">
                                    <span className="icon">✔</span>
                                    Verified
                                </span>
                                <span className="tax">
                                    Tax benefits available
                                </span>
                                <span className="category">
                                    Children
                                </span>
                            </div>
                            <h1>6 years old child of Sivaprasad needs your help fight Brain Stem Medulloblastoma</h1>
                            <div className="fundraiser-detail-figure">
                                <Swipers
                                    className="fundraiser-detail-swiper"
                                    imageWidth={830}
                                    imageHeight={462}
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    speed={1000}
                                    navigation={true}
                                    autoplay={false}
                                    loop={false}
                                    pagination={false}
                                    data={cards}
                                    swiperNavBtn="white-btn"
                                    swiperNavClass="center-full"
                                />
                            </div>

                            <h2>Organizer</h2>

                            <div className="organizer-card">
                                <div className="flex-box">
                                    <div className="lef">
                                        <figure>
                                            <Image src="/assets/images/fundraisers-card/Vimukti-Sanstha.png" height={68} width={68} alt='img'></Image>
                                        </figure>
                                        <figcaption>
                                            <h5>Vimukti Sanstha</h5>
                                            <p>Gurugram</p>
                                        </figcaption>
                                    </div>

                                    <Button className='btn secondary-btn' href='/'>Know More</Button>
                                </div>
                                <p>Donify is not a traditional NGO in the sense of a charity running its own programs. Rather, it’s a donation platform or giving hub designed to connect donors,</p>
                            </div>

                            <h2>Donate Via</h2>
                            <div className="donate-via-grid">
                                <div className="col">
                                    <figure>
                                        <Image src="/assets/images/fundraisers-card/donate-via/1.png" height={48} width={48} alt='ico'></Image>
                                    </figure>
                                    <h6>Google Pay and UPI</h6>
                                </div>
                                <div className="col">
                                    <figure>
                                        <Image src="/assets/images/fundraisers-card/donate-via/2.svg" height={48} width={48} alt='ico'></Image>
                                    </figure>
                                    <h6>Credit & Debit Cards</h6>
                                </div>
                                <div className="col">
                                    <figure>
                                        <Image src="/assets/images/fundraisers-card/donate-via/3.svg" height={48} width={48} alt='ico'></Image>
                                    </figure>
                                    <h6>Internet Banking & Transfer</h6>
                                </div>
                            </div>

                            <h2>Story</h2>
                            <p>At just six years old, Sivaprasad should be worrying about homework, playing with friends, and dreaming about what he wants to become when he grows up. Instead, he is fighting for his life.</p>
                            <h3>A Sudden Diagnosis That Changed Everything for His Family</h3>
                            <p>A few weeks ago, Sivaprasad began complaining of frequent headaches and dizziness. What his parents first thought was fatigue soon turned into something far more serious. After several hospital visits and medical tests, doctors delivered devastating news — Sivaprasad has been diagnosed with Brain Stem Medulloblastoma, an aggressive and life-threatening brain tumor.</p>
                            <p>His parents’ world came crashing down in a single moment. Sivaprasad is a cheerful, bright child who loves drawing, playing cricket, and making everyone around him smile. Today, he is undergoing intensive treatment that includes surgery, radiation, and chemotherapy. The treatment is critical — but it is also extremely expensive. The total cost of his medical care is far beyond what his family can afford. His parents have already exhausted their savings and borrowed from relatives, but the mounting hospital bills continue to grow each day.</p>

                            <div className="figure">
                                <Image src="/assets/images/banner/detail.jpg" height={452} width={762} alt="img"></Image>
                            </div>

                            <h3>No parent should have to choose between financial survival and their child’s life.</h3>
                            <p>This is where your support can make all the difference.</p>
                            <p>Your donation — big or small — will directly help cover:</p>
                            <ul>
                                <li>Life-saving surgery</li>
                                <li>Chemotherapy and radiation sessions</li>
                                <li>ICU and hospital charges</li>
                                <li>Medicines and post-treatment care</li>
                            </ul>
                            <p>Every contribution brings Sivaprasad one step closer to recovery. Every share spreads hope. Every prayer strengthens his fight. Sivaprasad deserves a chance to grow up, to go back to school, to play with his friends, and to live the childhood he has just begun. Please come forward and help this little warrior win his battle. Together, we can turn fear into hope and give Sivaprasad the future he deserves. Donate today. Share his story. Be the reason he smiles again.</p>
                        </div>


                        <div className="right-col">
                            <div className="funding">
                                <h5>Raised: <span>₹17,39,440</span></h5>
                                <p>Goal:  Rs. 30,00,000</p>
                            </div>

                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `30%` }} > </div>
                            </div>

                            <div className="btn-group-one">
                                <Button className='btn primary-btn' href="/donate-now">Donate Now</Button>
                                <Button className='btn gray-border' href="/">Share</Button>
                            </div>

                            <DonationCard
                                userName="Sachin Sharma"
                                donationAmount="₹10,000"
                                donationType="Recent Donation"
                            />
                            <DonationCard
                                userName="Sachin Sharma"
                                donationAmount="₹10,000"
                                donationType="Top Donation"
                            />
                            <DonationCard
                                userName="Sachin Sharma"
                                donationAmount="₹10,000"
                                donationType="First Donation"
                            />

                            <div className="bottom-btn-flex">
                                <Button href='/' className='btn secondary-border'>See All</Button>
                                <Button href='/' className='btn secondary-border'>See Top</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FaqSection />
            <SimilarFundraisers />
        </>
    )
}

export default FundraiserDetailPage