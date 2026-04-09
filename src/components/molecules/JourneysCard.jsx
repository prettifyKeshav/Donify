"use client"

import React from 'react'
import Image from 'next/image'
import { useModalStore } from '@/store/modelStore'

const JourneysCard = ({
    figureImage,
    title,
    dataVideoSrc
}) => {

    const openVideo = useModalStore((state) => state.openVideo)
    return (
        <>
            <div className="journey-Card">
                <figure>
                    <Image src={figureImage} width={555} height={370} alt='img'></Image>

                    <figcaption>
                        <div className="play-button" onClick={openVideo} data-video={dataVideoSrc} >
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