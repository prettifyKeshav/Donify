"use client"

import { useEffect, useRef } from "react";
import Image from 'next/image'
import "@/uploads/styles/ngo-listing/ngo-listing.css"
import DonationCard from '../FundraiserDetailPage/DonationCard'
import Button from '../../atoms/Button'
import Swipers from '../../molecules/Swipers'
import Accordion from '../../molecules/Accordion'
import SimilarNgos from './SimilarNgos'

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

const NgoDetailPage = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        if (!galleryRef.current) return;

        Fancybox.bind(galleryRef.current, "[data-fancybox='ngo-gallery']", {
            Thumbs: false,
            Toolbar: true,
        });

        return () => {
            Fancybox.unbind(galleryRef.current);
            Fancybox.close();
        };
    }, []);

    const cards = [
        {
            CardImg: "/assets/images/fundraisers-card/1.jpg",
            CategoryName: "Children",
            CardHeading: "6 years old child of Sivaprasad needs your help fight Brain Stem Medulloblastoma",
            author: "Vimukti Sanstha",
            location: "Gurugram",
            raised: "₹17,39,440",
            goal: "₹30,00,000",
            progress: 55,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "453",
            detailLink: "/fundraiser-detail",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/2.jpg",
            CategoryName: "Medical",
            CardHeading: "Support Riya’s heart surgery and give her a second chance at life",
            author: "Care Foundation",
            location: "Delhi",
            raised: "₹9,80,000",
            goal: "₹15,00,000",
            progress: 65,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "312",
            detailLink: "/fundraiser-detail",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/3.png",
            CategoryName: "Disaster Relief",
            CardHeading: "Help flood-affected families rebuild their homes in Assam",
            author: "Relief Trust",
            location: "Assam",
            raised: "₹5,20,300",
            goal: "₹10,00,000",
            progress: 52,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "198",
            detailLink: "/fundraiser-detail",
            dataTab: "relief"
        },
        {
            CardImg: "/assets/images/fundraisers-card/1.jpg",
            CategoryName: "Medical",
            CardHeading: "Urgent help needed for cancer treatment of 8-year-old Aarav",
            author: "Hope NGO",
            location: "Mumbai",
            raised: "₹12,45,000",
            goal: "₹20,00,000",
            progress: 62,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "521",
            detailLink: "/fundraiser-detail",
            dataTab: "medical"
        },
        {
            CardImg: "/assets/images/fundraisers-card/2.jpg",
            CategoryName: "Education",
            CardHeading: "Provide education and meals for underprivileged children",
            author: "Smile Foundation",
            location: "Bangalore",
            raised: "₹3,75,600",
            goal: "₹8,00,000",
            progress: 47,
            verified: true,
            taxBenefit: true,
            CardBtnText: "Donate Now",
            donorsNumber: "267",
            detailLink: "/fundraiser-detail",
            dataTab: "education"
        }
    ];

    const AccordianData = [
        {
            mainTitle: "6 September 2025",
            paragraph: "Yes. All payments are processed through secure and trusted payment gateways to ensure your information and transaction details remain safe.",
            isImageVisible: "ture",
            imageSrc: "/assets/images/accordian-img.jpg"
        },
        {
            mainTitle: "14 August 2025",
            paragraph: "Yes. All payments are processed through secure and trusted payment gateways to ensure your information and transaction details remain safe.",
            isImageVisible: "ture",
            imageSrc: "/assets/images/blog/3.jpg"
        },
        {
            mainTitle: "21 July 2025",
            paragraph: "Yes. All payments are processed through secure and trusted payment gateways to ensure your information and transaction details remain safe.",
            isImageVisible: "ture",
            imageSrc: "/assets/images/blog/blog-detail-banner.jpg"
        },
        {
            mainTitle: "10 May 2025",
            paragraph: "Yes. All payments are processed through secure and trusted payment gateways to ensure your information and transaction details remain safe.",
            isImageVisible: "ture",
            imageSrc: "/assets/images/accordian-img.jpg"
        }
    ];


    const GallerySwiperData = [
        {
            figureImageSrc: "/assets/images/gallery/1.jpg",
            imageWidth: "366",
            imageHeight: "244",
        },
        {
            figureImageSrc: "/assets/images/gallery/2.jpg",
            imageWidth: "366",
            imageHeight: "244",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/1.jpg",
            imageWidth: "366",
            imageHeight: "244",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/2.jpg",
            imageWidth: "366",
            imageHeight: "244",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/1.jpg",
            imageWidth: "366",
            imageHeight: "244",
        },
        {
            figureImageSrc: "/assets/images/monthlydoner/detailpage/Contribution/2.jpg",
            imageWidth: "366",
            imageHeight: "244",
        }
    ];

    return (
        <>
            <section>
                <div className="ngo-detail-secA">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/NGO/detail-page/detail-logo.png" width={146} height={146} alt='ico'></Image>
                                </figure>
                            </div>
                            <div className="col">
                                <h1>Snehalaya <span><Image src="/assets/images/NGO/green-check-icon.svg" width={27} height={27} alt='checked ico'></Image></span></h1>
                                <p>Floods, cyclones, landslides, and earthquakes continue to disrupt lives across the country, </p>
                                <div className="inside-flex">
                                    <span>Children</span>
                                    <span>Education</span>
                                    <span>Differently abled</span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="inside-flex">
                                    <p>Funds Raised</p>
                                    <h4>₹12,32,809</h4>
                                </div>
                                <div className="inside-flex">
                                    <p>Donations</p>
                                    <h4>41,902</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="ngo-detail-secB">
                    <div className="container">
                        <div className="flex-box">
                            <div className="left-col">

                                <div className="What-we-do">
                                    <h2>What we do</h2>
                                    <div className="flex">
                                        <div className="flex-item">
                                            <figure>
                                                <Image src="/assets/icon/location-primary.svg" width={20} height={20} alt='ico'></Image>
                                            </figure>
                                            <p>Gurugram</p>
                                        </div>
                                        <div className="flex-item">
                                            <figure>
                                                <Image src="/assets/icon/calender-primary.svg" width={20} height={20} alt='ico'></Image>
                                            </figure>
                                            <p>Founded in 2001</p>
                                        </div>
                                    </div>
                                    <p>Floods, cyclones, landslides, and earthquakes continue to disrupt lives across the country, leaving families without homes, food, clean water, and basic security. Every year, thousands are displaced overnight, forced to rebuild from nothing. In the critical hours after a disaster strikes, immediate relief can mean the difference between survival and tragedy. With consistent support, we can respond faster, reach deeper into affected communities, and ensure no family is left without help when they need it most.</p>
                                </div>

                                <div className="our-fundraisers">
                                    <div className="heading">
                                        <h2>Our Fundraisers</h2>
                                    </div>
                                    <Swipers
                                        className="more-similar-fundraisers"
                                        swiperSlideCard="FundraisersCard"
                                        imageWidth={381}
                                        imageHeight={226}
                                        slidesPerView={2}
                                        spaceBetween={20}
                                        speed={1000}
                                        navigation={cards.length > 3}
                                        autoplay={false}
                                        loop={false}
                                        pagination={false}
                                        data={cards}
                                        swiperNavBtn="white-btn-secondary-border"
                                    />
                                </div>

                                <div className="how-we-utilise-funds">
                                    <h2>How we utilise funds</h2>

                                    <Accordion
                                        data={AccordianData}

                                    />
                                </div>

                                <div className="gallery" ref={galleryRef}>
                                    <h2>Gallery</h2>

                                    <Swipers
                                        className="gallery-swiper"
                                        imageWidth={366}
                                        imageHeight={244}
                                        slidesPerView={2}
                                        spaceBetween={20}
                                        speed={1000}
                                        navigation={true}
                                        autoplay={false}
                                        loop={false}
                                        pagination={false}
                                        data={GallerySwiperData}
                                        enableFancybox={true}
                                        fancyboxGroup="ngo-gallery"
                                        swiperNavBtn="white-btn-secondary-border"
                                        swiperNavClass="swiper-nav"
                                    />
                                </div>

                                <div className="testimonials">
                                    <h2>Testimonials</h2>
                                    <Swipers
                                        className="testimonails-swiper"
                                        swiperSlideCard="TestimonialsCard"
                                        imageWidth={381}
                                        imageHeight={226}
                                        slidesPerView={2}
                                        spaceBetween={20}
                                        speed={1000}
                                        navigation={cards.length > 3}
                                        autoplay={false}
                                        loop={false}
                                        pagination={true}
                                        data={cards}
                                        swiperNavBtn="white-btn-secondary-border"
                                    />

                                </div>

                            </div>

                            <div className="right-col">
                                <div className="btn-group-one">
                                    <Button className='btn primary-btn' href="/">Donate Now</Button>
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
            </section>

            <SimilarNgos />
        </>
    )
}

export default NgoDetailPage