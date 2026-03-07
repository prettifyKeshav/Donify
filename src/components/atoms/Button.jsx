import Link from "next/link";

const Button = ({
    children,
    className = "",
    href = "#",
}) => {
    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    );
};

export default Button;