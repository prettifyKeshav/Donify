import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";

const FundraisersCard = ({
    CardImg,
    CategoryName,
    CardHeading,
    author,
    location,
    raised,
    goal,
    progress,
    verified,
    taxBenefit,
    donorsNumber,
    detailLink
}) => {

    const [showSocial, setShowSocial] = useState(false);

    return (
        <div className="fundraisers-card">
            <Link href={detailLink} className="figure">
                <Image src={CardImg} width={381} height={226} alt="img" />
                <div className="category">{CategoryName}</div>
            </Link>

            <figcaption>
                <div className="badge-wrap">
                    {verified && (
                        <span className="verified">
                            <span className="icon">✔</span>
                            Verified
                        </span>
                    )}

                    {taxBenefit && (
                        <span className="tax">
                            Tax benefits available
                        </span>
                    )}
                </div>

                <Link href={detailLink}>
                    <h4>{CardHeading}</h4>
                </Link>
                <div className="meta">
                    <span>{author}</span>
                    <span className="location">
                        <Image src="assets/images/fundraisers-card/location-ico.svg" width="8" height="14" alt="location"></Image>
                        {location}</span>
                </div>

                <div className="funding">
                    <h5>Raised: <span>{raised}</span></h5>
                    <p>Goal: {goal}</p>
                </div>

                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }} > </div>
                </div>

                <div className="bottom-flex">
                    <div className="donors">
                        <Image src="assets/images/fundraisers-card/heart.svg" width="19" height="17" alt="heart ico" ></Image>
                        {donorsNumber}  Donors
                    </div>

                    <div className="share-icon" onClick={() => setShowSocial(!showSocial)}>
                        <Image src="assets/images/fundraisers-card/share-ico.svg" width="19" height="22" alt="share icon"></Image>
                        <div className={`social-icons ${showSocial ? "open" : ""}`}>
                            <Link href="https://www.facebook.com/" className="share-social-item" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                            </Link>
                            <Link href="" className="share-social-item" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#173254" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2A1.01 1.01 0 0 0 3.8 21.454l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2M9.738 14.263c2.023 2.022 3.954 2.289 4.636 2.314c1.037.038 2.047-.754 2.44-1.673a.7.7 0 0 0-.088-.703c-.548-.7-1.289-1.203-2.013-1.703a.71.71 0 0 0-.973.158l-.6.915a.23.23 0 0 1-.305.076c-.407-.233-1-.629-1.426-1.055s-.798-.992-1.007-1.373a.23.23 0 0 1 .067-.291l.924-.686a.71.71 0 0 0 .12-.94c-.448-.656-.97-1.49-1.727-2.043a.7.7 0 0 0-.684-.075c-.92.394-1.716 1.404-1.678 2.443c.025.682.292 2.613 2.314 4.636" /></g></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <Button className="btn primary-btn donate-btn" href="/donate-now">
                    Donate Now
                </Button>
            </figcaption>
        </div >
    );
};

export default FundraisersCard;