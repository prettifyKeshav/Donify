import React from 'react'
import Image from 'next/image'
import "@/uploads/styles/ContactUs/ContactUs.css"
import Button from '../../atoms/Button'
import Link from 'next/link'
import FormSec from './FormSec'
import Map from './Map'
import "@/uploads/styles/component/custom-dropdown/custom-dropdown.css"

const ContactUsPage = () => {
    return (
        <>
            <section>
                <div className="contact-secA">
                    <div className="container">
                        <div className="flex-box">
                            <div className="col">
                                <h1>Contact Us</h1>
                                <div className="col-flex">
                                    <figure>
                                        <Image src="/assets/icon/location.svg" width={35} height={35} alt='logo ico'></Image>
                                    </figure>
                                    <div className="dec">
                                        <p>Lorem ipsum dolor sit amet consectetur. Elementum vestibulum viverra</p>
                                        <Button className='btn secondary-border' href='/'> Get Direction</Button>
                                    </div>
                                </div>
                                <div className="col-flex">
                                    <figure>
                                        <Image src="/assets/icon/mail.svg" width={35} height={35} alt='logo ico'></Image>
                                    </figure>
                                    <div className="dec">
                                        <Link href="mailto:info@donify.com" className='action'>info@donify.com</Link>
                                    </div>
                                </div>
                                <div className="col-flex">
                                    <figure>
                                        <Image src="/assets/icon/call.svg" width={35} height={35} alt='logo ico'></Image>
                                    </figure>
                                    <div className="dec">
                                        <Link href="tel:0000000000" className='action'>+91 - 0000000000</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <figure>
                                    <Image src="/assets/images/donify-ico.svg" width={359} height={332} alt='logo ico'></Image>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FormSec />
            <Map />
        </>
    )
}

export default ContactUsPage