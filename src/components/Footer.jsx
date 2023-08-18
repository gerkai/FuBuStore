import React, { useState } from "react";
import {
  ArrowCircleUp,
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "phosphor-react";
import { footerlogo } from "../assets";

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const offset = 200;

    if (scrollY > offset) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column is-one-quarter">
            <img src={footerlogo} alt="logo" width="191" height="30" />
            <p className="mt-3 mb-3 has-text-white is-size-7 has-text-weight-semibold">
              Copyright © FUBU. All rights reserved.
            </p>
          </div>
          <div className="column"></div>
          <div className="column is-narrow has-text-white">
            <p className="has-text-weight-bold mb-3 is-uppercase">company</p>
            <ul className="is-size-7">
              <li className="mb-2">
                <a>About us</a>
              </li>
              <li className="mb-2">
                <a>Terms and Conditions</a>
              </li>
              <li className="mb-2">
                <a>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="column"></div>
          <div className="column is-narrow has-text-white">
            <p className="has-text-weight-bold mb-3 is-uppercase">
              customer care
            </p>
            <ul className="is-size-7">
              <li className="mb-2">
                <a>Contact Us</a>
              </li>
              <li className="mb-2">
                <a>Returns and Exchange</a>
              </li>
            </ul>
          </div>
          <div className="column"></div>
          <div className="column is-narrow has-text-white">
            <p className="has-text-weight-bold mb-3 is-uppercase">my account</p>
            <ul className="is-size-7">
              <li className="mb-2">
                <a>Login</a>
              </li>
              <li className="mb-2">
                <a>Register</a>
              </li>
            </ul>
          </div>
          <div className="column"></div>
          <div className="column is-narrow has-text-white">
            <p className="has-text-weight-bold mb-3 is-uppercase">follow us</p>
            <span className="icon is-medium">
              <a>
                <FacebookLogo size={"25px"} />
              </a>
            </span>
            <span className="icon is-medium">
              <a>
                <InstagramLogo size={"25px"} />
              </a>
            </span>
            <span className="icon is-medium">
              <a>
                <TwitterLogo size={"25px"} />
              </a>
            </span>
          </div>
        </div>
        {showButton && (
          <a
            className="button is-primary is-pulled-right"
            onClick={handleScrollToTop}
          >
            <ArrowCircleUp size={40} />
          </a>
        )}
      </div>
    </footer>
  );
};

export default Footer;
