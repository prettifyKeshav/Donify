import Button from "../components/atoms/Button";
import Image from "next/image";

const NotFound = () => {
    return (
        <section>
            <div className="not-found-banner">
                <div className="content text-center">
                    <div className="logo">
                        <div className="">
                            <Image src="/assets/images/donify-ico.svg" width={108} height={108} alt="donify ico"></Image>
                        </div>
                    </div>
                    <h1>PAGE NOT FOUND!</h1>
                    <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                    <Button className="btn primary-btn" href="/">Back to Home</Button>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
