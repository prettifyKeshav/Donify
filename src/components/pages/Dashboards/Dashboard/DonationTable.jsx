import Image from "next/image";
import Button from "@/src/components/atoms/Button";

const categoryClass = {
    NGO: "dt-badge--ngo",
    Monthly: "dt-badge--monthly",
    Fundraiser: "dt-badge--fundraiser",
};

const DonationTable = ({ donations }) => {
    return (
        <div className="dt-wrap">
            <table className="dt">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {donations.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <div className="dt-name-cell">
                                    <Image
                                        src={item.image}
                                        width={48}
                                        height={48}
                                        alt={item.name}
                                        className="dt-thumb"
                                    />
                                    <span className="dt-name">{item.name}</span>
                                </div>
                            </td>
                            <td>
                                <span className={`dt-badge ${categoryClass[item.category] || ""}`}>
                                    {item.category}
                                </span>
                            </td>
                            <td className="dt-amount">{item.amount}</td>
                            <td className="dt-date">{item.date}</td>
                            <td>
                                <Button className="btn dt-btn" href={item.href}>
                                    View Details
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DonationTable;