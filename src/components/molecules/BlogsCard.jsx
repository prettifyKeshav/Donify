import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "@/uploads/styles/component/component.css"

const BlogsCard = ({
    imageSrc,
    heading,
    description,
    blogHref
}) => {
    return (
        <>
            <Link href={blogHref} className="blogs-card">
                <figure>
                    <Image src={imageSrc} width={380} height={254} alt="blog img"></Image>
                </figure>
                <figcaption>
                    <h4>{heading}</h4>
                    <p>{description}</p>
                </figcaption>
            </Link>
        </>
    )
}

export default BlogsCard