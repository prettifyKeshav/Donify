import React from 'react'
import Image from 'next/image'
import DonationTable from './DonationTable'

const DashboardMain = () => {

    const AnalyticsData = [
        {
            figureImage: '/assets/images/Dashboard/icon/1.svg',
            text: "Total Amount Donated",
            number: "₹12,450"
        },
        {
            figureImage: '/assets/images/Dashboard/icon/2.svg',
            text: "Number of Donations",
            number: "142"
        },
        {
            figureImage: '/assets/images/Dashboard/icon/3.svg',
            text: "Active Monthly Donors",
            number: "12"
        },
        {
            figureImage: '/assets/images/Dashboard/icon/4.svg',
            text: "Monthly Total",
            number: "₹1,250"
        }
    ]

    const RecentDonation = [
        {
            name: "Vimukti Sanstha",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "NGO",
            amount: "₹4,000",
            date: "28 Jun 2025",
            href: "/detail/1",
        },
        {
            name: "6 years old child of Sivaprasad needs your help fight Brain Stem Medulloblastoma",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Monthly",
            amount: "₹4,000",
            date: "28 Jun 2025",
            href: "/detail/2",
        },
        {
            name: "Education for All",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Fundraiser",
            amount: "₹2,500",
            date: "15 Jul 2025",
            href: "/detail/3",
        },
        {
            name: "Food Drive अभियान",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "NGO",
            amount: "₹1,200",
            date: "10 Jul 2025",
            href: "/detail/4",
        },
        {
            name: "Monthly Child Support",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Monthly",
            amount: "₹800",
            date: "01 Jul 2025",
            href: "/detail/5",
        },
        {
            name: "Flood Relief Kerala",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Fundraiser",
            amount: "₹5,000",
            date: "05 Aug 2025",
            href: "/detail/6",
        },
        {
            name: "Animal Welfare Trust",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "NGO",
            amount: "₹950",
            date: "22 Jun 2025",
            href: "/detail/7",
        },
        {
            name: "Healthcare Support Fund",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Fundraiser",
            amount: "₹3,200",
            date: "30 Jul 2025",
            href: "/detail/8",
        },
        {
            name: "Monthly Education Aid",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Monthly",
            amount: "₹1,000",
            date: "01 Aug 2025",
            href: "/detail/9",
        },
        {
            name: "Women Empowerment Drive",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "NGO",
            amount: "₹2,200",
            date: "18 Jul 2025",
            href: "/detail/10",
        },
        {
            name: "Village Development Fund",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Fundraiser",
            amount: "₹3,800",
            date: "12 Aug 2025",
            href: "/detail/11",
        },
        {
            name: "Monthly Health Program",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Monthly",
            amount: "₹700",
            date: "01 Sep 2025",
            href: "/detail/12",
        },
        {
            name: "Clean Water Initiative",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "NGO",
            amount: "₹1,500",
            date: "25 Jul 2025",
            href: "/detail/13",
        },
        {
            name: "Emergency Medical Fund",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Fundraiser",
            amount: "₹6,000",
            date: "20 Aug 2025",
            href: "/detail/14",
        },
        {
            name: "Monthly Food Support",
            image: "/assets/images/fundraisers-card/Vimukti-Sanstha.png",
            category: "Monthly",
            amount: "₹600",
            date: "01 Oct 2025",
            href: "/detail/15",
        },
    ]; 

    return (
        <>
            <div className="main-dashboard">
                <div className="grid-box">
                    {
                        AnalyticsData.map((item, index) => {
                            return (
                                <div className="col" key={index}>
                                    <figure>
                                        <Image src={item.figureImage} width={25} height={25} alt="ico" ></Image>
                                    </figure>
                                    <p>{item.text}</p>
                                    <h4>{item.number}</h4>
                                </div>
                            )
                        })
                    }
                </div>

                <DonationTable
                    donations={RecentDonation}
                />

            </div>
        </>
    )
}

export default DashboardMain