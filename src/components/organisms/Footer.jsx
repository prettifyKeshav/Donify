import Link from "next/link";
import Image from "next/image";
import Button from "../atoms/Button";
import "@/uploads/styles/header/header.css";

const Footer = () => {
  return (
    <footer>

      <div className="top-sec">
        <div className="container flex-box">
          <h3>Need help to setup your free fundraiser?</h3>
          <div className="btn-group">
            <Button className="btn white-btn">
              Enroll your NGO
            </Button>
            <Button className="btn primary-btn">
              Donate Now
            </Button>
          </div>
        </div>
      </div>

      <div className="bottom-sec">
        <div className="container">
          <div className="grid-box">

            <div className="grid-box-item">
              <figure>
                <Image src="/assets/logo.svg" width={108} height={107} alt="footer logo"></Image>
              </figure>
            </div>

            <div className="grid-box-item">

              <div className="col-md">
                <h6>About Us</h6>
                <ul>
                  <li><Link href="/">About Donify</Link></li>
                  <li><Link href="/blogs">Blogs</Link></li>
                  <li><Link href="/">FAQ’s</Link></li>
                  <li><Link href="/">Contact Us</Link></li>
                </ul>
              </div>

              <div className="col-md">
                <h6>Fundraiser Support</h6>
                <ul>
                  <li><Link href="/">FAQ’s</Link></li>
                  <li><Link href="/">Reach out</Link></li>
                </ul>
              </div>

              <div className="col-md">
                <h6>Start a Fundraiser for</h6>
                <ul>
                  <li><Link href="/">NGO</Link></li>
                </ul>
              </div>

              <div className="col-md">
                <h6>Donate to</h6>
                <ul>
                  <li><Link href="/">Social Causes</Link></li>
                  <li><Link href="/">NGOs</Link></li>
                </ul>

                <div className="social-icons">
                  <Link href="https://x.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#173254" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23" /></svg>
                  </Link>
                  <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"></path></svg>
                  </Link>
                  <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></path></svg>
                  </Link>
                  <Link href="https://in.linkedin.com/company/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path></svg>
                  </Link>
                  <Link href="/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#ffffff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                  </Link>
                </div>

                <div className="payment-method">
                  <Image src="/assets/images/Footer/payment-method.png" height={39} width={228} alt="payment-method" title="payment-git"></Image>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="flex-box">
          <p>© Donify , All rights reserved.</p>

          <span>|</span>

          <Link
            href="https://www.prettifycreative.com/"
            className="prettify"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Made by</span>

            <figure>
              <Image src="/assets/icon/prettify.svg" width={57} height={21} alt="prettify creative"></Image>
            </figure>
          </Link>

        </div>

        <ul>
          <li>
            <Link href="/">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/">Terms</Link>
          </li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;