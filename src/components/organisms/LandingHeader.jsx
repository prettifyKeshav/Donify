"use client";

import Link from "next/link";
import Image from "next/image";
import "@/uploads/styles/header/header.css"
import Button from "../atoms/Button";

const Header = () => {

    return (
        <header className="header-fixed">
            <div className="container-fluid header-wrapper">
                <div className="colA">
                    <Link href="/" className="logo">
                        <Image src="/assets/logo.svg" width={80} height={77} alt="logo"></Image>
                    </Link>
                </div>
                <div className="colB">
                    <ul>
                        <li>
                            <Link href="/" className="slideto">How it Works</Link>
                        </li>
                        <li>
                            <Link href="/" className="slideto">NGO Network</Link>
                        </li>
                        <li>
                            <Link href="/" className="slideto">Testimonials</Link>
                        </li>
                        <li>
                            <Link href="/" className="slideto">FAQs</Link>
                        </li>
                        <li>
                            <Button className="btn primary-btn " href="/">
                                Enroll your NGO on Donify
                            </Button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header