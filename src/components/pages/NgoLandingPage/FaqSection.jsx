import React from 'react'
import Button from '../../atoms/Button'
import Image from 'next/image'
import Accordion from '../../molecules/Accordion'

const FaqSection = () => {
    const AccordianData = [
        {
            mainTitle: "Who can register as an NGO on this platform?",
            paragraph: "Any legally registered non-profit organization, trust, or society can apply to join our platform. NGOs working in areas like education, healthcare, environment, social welfare, and more are welcome."
        },
        {
            mainTitle: "Is there any fee to register our NGO?",
            paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maxime beatae minus repudiandae libero labore, sint ullam! Voluptates dolore, numquam, ratione, vero qui quia dolor doloremque eum consectetur vel minus reiciendis fuga deleniti corporis!"
        },
        {
            mainTitle: " What documents are required for registration?",
            paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maxime beatae minus repudiandae libero labore, sint ullam! Voluptates dolore, numquam, ratione, vero qui quia dolor doloremque eum consectetur vel minus reiciendis fuga deleniti corporis!"
        },
        {
            mainTitle: "How long does the verification process take?",
            paragraph: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem maxime beatae minus repudiandae libero labore, sint ullam! Voluptates dolore, numquam, ratione, vero qui quia dolor doloremque eum consectetur vel minus reiciendis fuga deleniti corporis!"
        }
    ];

    return (
        <>
            <section>
                <div className="faq-sec" id='Faqs'>
                    <div className="vector-img rotate-infinite">
                        <Image className='' src="/assets/vector/logo-vector-2.png" width={436} height={404} alt='vector'></Image>
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