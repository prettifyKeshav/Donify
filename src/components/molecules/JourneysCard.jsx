import React from 'react'
import Image from 'next/image'

const JourneysCard = ({
    figureImage,
    title,
}) => {
    return (
        <>
            <div className="journey-Card">
                <figure>
                    <Image src={figureImage} width={555} height={370} alt='img'></Image>

                    <figcaption>
                        <div className="play-button" data-model=".video-pop">
                            <button type="button" className="play-btn"></button>
                        </div>
                        <h3>{title}</h3>
                    </figcaption>
                </figure>
            </div>
        </>
    )
}

export default JourneysCard