import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <div className="social-links">
            <Image
              className="logo-footer"
              src="/logo.svg"
              alt="logo"
              width={100}
              height={30}
            />

            <div className="social-icon">
              <Image
                src="/icon-facebook.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <Image
                src="/icon-youtube.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <Image
                src="/icon-twitter.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <Image
                src="/icon-pinterest.svg"
                alt="logo"
                width={20}
                height={20}
              />
              <Image
                src="/icon-instagram.svg"
                alt="logo"
                width={20}
                height={20}
              />
            </div>
          </div>

          <div>
            <div className="footer-links">
              <div className="even">
                <Link href="/about-us">About Us</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>
              </div>
              <div className="even">
                <Link href="/Careers">Careerrs</Link>
                <Link href="/support">Support</Link>
                <Link href="/privacy-policy">Privacy-Policy</Link>
              </div>
            </div>
          </div>

          <div className="footer-btn">
            <button className="btn">Request Invite</button>
            <p>© Easybank. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
