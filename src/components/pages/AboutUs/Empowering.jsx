import React from 'react'
import Image from 'next/image'

const Empowering = () => {
    return (
        <>
            <section>
                <div className="about-secA">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/about/hand.png" width={362} height={362} alt='ico'></Image>
                                </figure>
                            </div>
                            <div className="col">
                                <h2>Empowering Change, One Contribution at a Time</h2>
                                <p>We are a platform dedicated to connecting compassionate individuals with meaningful causes. Our mission is to empower NGOs and fundraisers by providing them with the tools, visibility, and support they need to create real impact. Whether it's raising funds, spreading awareness, or building a community of change-makers, we make giving simple, transparent, and impactful.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Empowering