import React from "react";
import Image from "next/image";

import Button from "../atoms/Button";

const Hero = ({
    className = "",
    bgType = "image",
    bgSrc = "",
    title = "",
    secondTitile = "",
    description = "",
    btnClassName,
    btnChildren,
    btnClassName2,
    btnChildren2,
    firstBtnHref,
    secondBtnHref

}) => {
    return (
        <div className={className}>
            <div className="bg-background">

                {bgType === "video" && (
                    <video autoPlay muted playsInline loop className="bg-video">
                        <source src={bgSrc} type="video/mp4" />
                    </video>
                )}

                {bgType === "image" && (
                    <Image
                        src={bgSrc}
                        alt="Hero Background"
                        fill
                        className="bg-image"
                        priority
                    />
                )}

                <div className="container">
                    <div className="bg-wrapper">
                        <h1>{title}</h1>
                        <h2>{secondTitile}</h2>
                        <p>{description}</p>

                        <Button href={firstBtnHref} className={btnClassName} >
                            {btnChildren}
                        </Button>

                        <Button href={secondBtnHref} className={btnClassName2} >
                            {btnChildren2}
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;