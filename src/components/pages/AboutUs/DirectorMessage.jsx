import React from 'react'
import Image from 'next/image'

const DirectorMessage = () => {
    return (
        <>
            <section>
                <div className="about-secD">
                    <div className="vector-img rotate-infinite">
                        <Image className='' src="/assets/vector/logo-vector.png" width={436} height={404} alt='vector'></Image>
                    </div>
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/about/director-img.jpg" width={403} height={450} alt="director-img" ></Image>
                                </figure>
                            </div>
                            <div className="col">
                                <h2>director message</h2>
                                <h3>We’re here to make impact simple, meaningful, and scalable—connecting people and resources to create change that lasts.</h3>

                                <div className="singnature">
                                    <figure>
                                        <Image src="/assets/images/about/singnature.png" width={155} height={36} alt="singnature.png" ></Image>
                                    </figure>

                                    <div className="bottom">
                                        <h4>Shashank Singh</h4>
                                        <p>Director and CEO</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DirectorMessage