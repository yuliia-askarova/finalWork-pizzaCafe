import React from "react";
import "./Footer.css";
import time from "../../assets/time.svg";
import phone from "../../assets/phone.svg";
import fb from "../../assets/fb.svg";
import insta from "../../assets/insta.svg";
import visa from "../../assets/visa.svg";
import master from "../../assets/mastercard.svg";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-inner">
          <div className="bottom-section">
            <div className="time-section">
              <img src={time} alt="" />

              <div>
                <h5>Working hours</h5>
                <p>Everyday</p>
                <p>12pm - 10pm</p>
              </div>
            </div>

            <div className="contact-section">
              <img src={phone} alt="" />

              <div>
                <h5>Contacts</h5>
                <p>+353 830805028</p>
                <p>lastsong428@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <div>
              <img src={fb} alt="" />
              <img src={insta} alt="" />
            </div>

            <div>
              <img src={visa} alt="" />
              <img src={master} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
