import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "@/uploads/styles/component/component.css"

const NgoHomeCard = (
    {
        cardHref,
        figureImageSrc,
        heading
    }
) => {
    return (
        <>
            <Link href={cardHref} className='ngo-home-card'>
                <figure>
                    <Image src={figureImageSrc} width={167} height={194} alt='ico'></Image>
                </figure>
                <figcaption>
                    <h4>{heading}</h4>
                </figcaption>
            </Link>
        </>
    )
}

export default NgoHomeCard