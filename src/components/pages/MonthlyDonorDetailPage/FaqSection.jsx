import React from 'react'
import Button from '../../atoms/Button'
import Image from 'next/image'
import Accordion from '../../molecules/Accordion'

const FaqSection = () => {
    const AccordianData = [
        {
            mainTitle: "Are the donations secure?",
            paragraph: "Yes. All payments are processed through secure and trusted payment gateways to ensure your information and transaction details remain safe."
        },
        {
            mainTitle: "How do I start a fundraiser?",
            paragraph: "You can start a fundraiser by clicking on the 'Start a Fundraiser' button on the homepage, filling in the required details about your cause, and publishing it."
        },
        {
            mainTitle: "Is there any fee to create a fundraiser?",
            paragraph: "Creating a fundraiser is completely free. We only charge a small platform fee on the donations you receive (if applicable)."
        },
        {
            mainTitle: "How do I donate to a campaign?",
            paragraph: "Browse through the active campaigns, select the one you wish to support, enter the donation amount, and complete the payment securely."
        }
    ];

    return (
        <>
            <section>
                <div className="faq-sec">
                    <div className="vector-img rotate-infinite">
                        <Image className='' src="/assets/vector/logo-vector.png" width={436} height={404} alt='vector'></Image>
                    </div>
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <h2>Frequently Asked Questions</h2>
                                <Button href='/' className='btn secondary-border'>Contact Us</Button>
                            </div>

                            <div className="col">
                                <Accordion
                                    data={AccordianData}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqSection