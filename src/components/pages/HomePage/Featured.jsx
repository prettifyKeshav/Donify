import React from 'react'
import Image from 'next/image'

const Featured = () => {

    const data = [
        { ImageSrc: "/assets/images/Home/featured/1.png" },
        { ImageSrc: "/assets/images/Home/featured/2.png" },
        { ImageSrc: "/assets/images/Home/featured/3.png" },
        { ImageSrc: "/assets/images/Home/featured/4.png" },
        { ImageSrc: "/assets/images/Home/featured/5.png" },
        { ImageSrc: "/assets/images/Home/featured/6.png" },
    ]

    return (
        <>
            <section>
                <div className="home-secK">
                    <div className="container">
                        <h2>Featured on</h2>

                        <div className="grid-box">
                            {
                                data.map((items, index) => {
                                    return (
                                        <figure key={index}>
                                            <Image src={items.ImageSrc} height="74" width="130" alt="ico"></Image>
                                        </figure>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured