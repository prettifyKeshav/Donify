"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navItems = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Profile", href: "/dashboard/profile" },
    { label: "NGOs", href: "/dashboard/ngos" },
    { label: "Fundraisers", href: "/dashboard/fundraisers" },
    { label: "Donations", href: "/dashboard/donations" },
    { label: "Forgot Password", href: "/dashboard/forgot-password" },
];

const DashboardSidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <Image src="/assets/logo.svg" width={80} height={77} alt="Donify logo"></Image>
            </div>

            <ul>
                {navItems.map(({ label, href }) => (
                    <li key={href}
                        className={`sidebar-item${pathname === href ? " sidebar-item-active" : ""}`}
                    >
                        <Link href={href}>
                            <span>{label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default DashboardSidebar;
