"use client"
import "@/uploads/styles/blogs-detail/blogs-detail.css"

import React, { useEffect } from 'react'

import Image from 'next/image'
import Hero from '../../organisms/Hero'
import Swipers from '../../molecules/Swipers'
import Button from "../../atoms/Button"

const BlogsDetailPage = () => {

    useEffect(() => {
        const inputBoxes = document.querySelectorAll(".form-control");
        const handleFocus = function () {
            this.closest(".form-group")?.classList.add("active");
            this.classList.add("valid");
        };
        const handleBlur = function () {
            if (!this.value.trim()) {
                this.closest(".form-group")?.classList.remove("active");
                this.classList.remove("valid");
            }
        };
        inputBoxes.forEach((inputBox) => {
            inputBox.addEventListener("focus", handleFocus);
            inputBox.addEventListener("blur", handleBlur);
        });
        return () => {
            inputBoxes.forEach((inputBox) => {
                inputBox.removeEventListener("focus", handleFocus);
                inputBox.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

    const cards = [
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/1.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        ,
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/2.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/3.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/1.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/2.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        },
        {
            blogHref: "/blogs-detail",
            imageSrc: "/assets/images/blog/3.jpg",
            heading: "The Power of Giving: How Small Donations Create Big Change",
            description: "30 Mar 2026"
        }
    ]

    return (
        <>
            <Hero
                className="hero-banner blogs-detail-banner"
                bgType="image"
                bgSrc="/assets/images/blog/blog-detail-banner.jpg"
                title="Bridging Gaps: Bringing Hope to Underserved Communities"
                description="30 Mar 2026"
            />

            <div className="container">
                <div className="detail-flex-box">
                    <div className="left-col">
                        <p>Lorem ipsum dolor sit amet consectetur. Maecenas vel fringilla felis faucibus arcu in ultrices quam aliquam. Sed faucibus libero at tincidunt amet sed rhoncus. Pulvinar vitae viverra interdum orci mauris facilisis libero aenean amet. Viverra eu feugiat eu placerat dui auctor. Est gravida sit euismod aenean. At sit risus auctor nisi. Mi ornare faucibus at enim sed egestas. Mauris pretium enim proin nam fames. Est risus ut amet a tincidunt tincidunt ut ultricies. Velit arcu at at nullam leo sodales egestas aenean sed. Placerat sit elit aliquam lectus quis odio mattis enim. Laoreet habitant felis praesent in augue sagittis. Non in ut at elementum viverra quam duis non metus.Et egestas facilisis libero orci sed mauris massa erat. Egestas fusce bibendum dolor condimentum neque. Feugiat commodo ut erat ipsum faucibus lacus libero. Ullamcorper a odio mi volutpat id ut urna. Nulla facilisi tristique lorem tellus lectus a. Condimentum tempus leo eu at vitae purus est cras eget. Vel varius orci tempus aliquam.</p>

                        <figure>
                            <Image src="/assets/images/blog/blog-detail-image.jpg" width={712} height={409} alt="img"></Image>
                        </figure>

                        <h2>Lorem ipsum dolor sit amet consectetur. </h2>

                        <p>Lorem ipsum dolor sit amet consectetur. Maecenas vel fringilla felis faucibus arcu in ultrices quam aliquam. Sed faucibus libero at tincidunt amet sed rhoncus. Pulvinar vitae viverra interdum orci mauris facilisis libero aenean amet. Viverra eu feugiat eu placerat dui auctor. Est gravida sit euismod aenean. At sit risus auctor nisi. Mi ornare faucibus at enim sed egestas. Mauris pretium enim proin nam fames. Est risus ut amet a tincidunt tincidunt ut ultricies. Velit arcu at at nullam leo sodales egestas aenean sed. Placerat sit elit aliquam lectus quis odio mattis enim. Laoreet habitant felis praesent in augue sagittis. Non in ut at elementum viverra quam duis non metus.Et egestas facilisis libero orci sed mauris massa erat. Egestas fusce bibendum dolor condimentum neque. Feugiat commodo ut erat ipsum faucibus lacus libero. Ullamcorper a odio mi volutpat id ut urna. Nulla facilisi tristique lorem tellus lectus a. Condimentum tempus leo eu at vitae purus est cras eget. Vel varius orci tempus aliquam.</p>
                    </div>

                    <div className="right-col">
                        <figure>
                            <Image src="/assets/logo.svg" width={80} height={77} alt='ico logo'></Image>
                        </figure>

                        <form action="" className="form form-grid" >
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" id="email" />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-group">
                                <input type="tel" name="phone" className="form-control" id="phone" />
                                <label htmlFor="email">Phone</label>
                            </div>

                            <div className="form-group full">
                                <textarea name="message" id="message" className="form-control"></textarea>
                                <label htmlFor="message">Message</label>
                            </div>

                            <div className="submit-btn full">
                                <Button className="btn primary-btn" href="/">Enquire Now</Button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <section>
                <div className="similar-blogs">
                    <div className="container">
                        <h2>Similar Blogs</h2>
                        <Swipers
                            className="more-similar-blogs"
                            swiperSlideCard="BlogsCard"
                            imageWidth={381}
                            imageHeight={226}
                            slidesPerView={3}
                            spaceBetween={20}
                            speed={1000}
                            navigation={cards.length > 3}
                            autoplay={false}
                            loop={false}
                            pagination={false}
                            data={cards}
                            swiperNavBtn="white-btn-secondary-border"
                            swiperNavClass="center-full-full"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogsDetailPage