"use client";

import Link from "next/link";
import Image from "next/image";
import "@/uploads/styles/header/header.css"
import Button from "../atoms/Button";
import { useModalStore } from "@/store/modelStore";

const Header = () => {
    const openHam = useModalStore((state) => state.openHam);

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
                            <Button className="btn secondary-border " href="/ngo-landing" isTargetBlank>
                                Enroll your NGO
                            </Button>
                        </li>
                        <li>
                            <Button className="btn primary-btn " href="/">
                                Donate Now
                            </Button>
                        </li>
                        <li>
                            <Button className="btn gradient-btn " href="/monthly-donor-listing">
                                Donate Monthly
                            </Button>
                        </li>

                        <li>
                            <Link href="/" className="login">Login/ Join Us</Link>
                        </li>

                        <li className="ham-parent">
                            <button type="button" className="ham-btn" onClick={openHam}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header