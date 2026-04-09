import React from 'react'
import Button from '@/src/components/atoms/Button'
import Link from 'next/link';
import Image from 'next/image';

const page = () => {

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
            Datacategory: "medical"
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
            Datacategory: "medical"
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
            Datacategory: "relief"
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
            Datacategory: "medical"
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
            donorsNumber: "267",
            detailLink: "/fundraiser-detail",
            CardBtnText: "Donate Now",
            Datacategory: "education"
        }
    ];

    return (
        <>
            <div className="my-fundraisers">
                <div className="flex-box">
                    <h2>My Fundraisers</h2>

                    <div className="right">
                        <Button className='btn secondary-btn'>Add NGO</Button>
                    </div>
                </div>

                <div className="grid-box">
                    {
                        cards.map((item, index) => {
                            return (
                                <div className="fundraisers-card" key={index}>
                                    <Link href={item.detailLink} className="figure">
                                        <Image src={item.CardImg} width={381} height={226} alt="img" />
                                        <div className="category">{item.CategoryName}</div>
                                    </Link>

                                    <figcaption>
                                        <div className="badge-wrap">
                                            {item.verified && (
                                                <span className="verified">
                                                    <span className="icon">✔</span>
                                                    Verified
                                                </span>
                                            )}

                                            {item.taxBenefit && (
                                                <span className="tax">
                                                    Tax benefits available
                                                </span>
                                            )}
                                        </div>

                                        <Link href={item.detailLink}>
                                            <h4>{item.CardHeading}</h4>
                                        </Link>
                                        <div className="meta">
                                            <span>{item.author}</span>
                                            <span className="location">
                                                <Image src="assets/images/fundraisers-card/location-ico.svg" width="8" height="14" alt="location"></Image>
                                                {item.location}</span>
                                        </div>

                                        <div className="funding">
                                            <h5>Raised: <span>{item.raised}</span></h5>
                                            <p>Goal: {item.goal}</p>
                                        </div>

                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: `${item.progress}%` }} > </div>
                                        </div>

                                        <div className="bottom-flex">
                                            <div className="donors">
                                                <Image src="assets/images/fundraisers-card/heart.svg" width="19" height="17" alt="heart ico" ></Image>
                                                {item.donorsNumber}  Donors
                                            </div>
                                        </div>
                                        <Button className="btn primary-btn donate-btn">
                                            Donate Now
                                        </Button>
                                    </figcaption>
                                </div >
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default page