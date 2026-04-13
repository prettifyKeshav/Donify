"use client";

import Link from "next/link";
import Image from "next/image";
import "@/uploads/styles/header/header.css"
import { useModalStore } from "@/store/modelStore";

const Header = () => {
    const openLogin = useModalStore((state) => state.openLogin)

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
                            <Link href="#How_It_Works" className="slideto">How it Works</Link>
                        </li>
                        <li>
                            <Link href="#Ngo_Network" className="slideto">NGO Network</Link>
                        </li>
                        <li>
                            <Link href="#Testimonials" className="slideto">Testimonials</Link>
                        </li>
                        <li>
                            <Link href="#Faqs" className="slideto">FAQs</Link>
                        </li>
                        <li>
                            <button className="btn primary-btn " href="/" onClick={openLogin}>
                                Enroll your NGO on Donify
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header