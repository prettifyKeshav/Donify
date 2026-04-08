import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import "@/uploads/styles/header/header.css"

const HamburgerModel = () => {

    const menuItems = [
        { id: 1, title: "Enroll your NGO", href: "/" },
        { id: 2, title: "Donate Monthly", href: "/" },
        { id: 3, title: "Fundraisers", href: "/" },
        { id: 4, title: "About Donify", href: "/" },
        { id: 5, title: "Blogs", href: "/" },
        { id: 6, title: "FAQ’s", href: "/" },
        { id: 7, title: "Contact Us", href: "/" },
    ];

    return (
        <>
            <div className="model ham-pop is-open">
                <button className="close">
                    <svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="model-body">
                    <nav>
                        <ul className="nav-list">
                            {menuItems.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <Link href={item.href}>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <div className="bottom-list">
                        <div className="social-icons">
                            <Link href="/" target="_blank" title="Twitter">
                                <Image src="assets/icon/twitter.svg" width="25" height="25" alt="Social Icons"></Image>
                            </Link>
                            <Link href="/" target="_blank" title="Facebook">
                                <Image src="assets/icon/facebook.svg" width="25" height="25" alt="Social Icons"></Image>
                            </Link>
                            <Link href="/" target="_blank" title="Instagram">
                                <Image src="assets/icon/instagram.svg" width="25" height="25" alt="Social Icons"></Image>
                            </Link>
                            <Link href="/" target="_blank" title="Linkedin">
                                <Image src="assets/icon/linkedin.svg" width="25" height="25" alt="Social Icons"></Image>
                            </Link>
                            <Link href="/" target="_blank" title="Whatsapp">
                                <Image src="/assets/icon/whatsapp.svg" width="25" height="25" alt="Social Icons"></Image>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HamburgerModel