import React from 'react'
import Image from 'next/image'

const ValuesCards = ({
    figureImage,
    heading,
    description
}) => {
    return (
        <>
            <div className="our-values-card">
                <figure>
                    <Image src={figureImage} width={70} height={70} alt='ico'></Image>
                </figure>
                <figcaption>
                    <h3>{heading}</h3>
                    <p>{description}</p>
                </figcaption>
            </div>
        </>
    )
}

export default ValuesCards