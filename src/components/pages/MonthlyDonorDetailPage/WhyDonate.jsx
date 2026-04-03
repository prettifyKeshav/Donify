import React from 'react'
import Image from 'next/image'

const WhyDonate = () => {
    return (
        <section>
            <div className="monthly-donar-detail-secB">
                <div className="container">
                    <div className="heading">
                        <h2>Why donate every month?</h2>
                        <div className="grid-box">
                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/monthlydoner/whydonateicon/1.svg" width={45} height={45} alt="ico" ></Image>
                                </figure>
                                <h4>Convenience</h4>
                                <p>Your donation is auto-debited monthly, making an impact effortlessly.</p>
                            </div>

                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/monthlydoner/whydonateicon/2.svg" width={45} height={45} alt="ico" ></Image>
                                </figure>
                                <h4>Lasting Sustained Impact</h4>
                                <p>Your support helps our partner NGOs reach more survivors in need.</p>
                            </div>

                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/monthlydoner/whydonateicon/3.svg" width={45} height={45} alt="ico" ></Image>
                                </figure>
                                <h4>Tax-Saving</h4>
                                <p>Get automated, hassle-free tax-exempt receipts emailed yearly to you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyDonate