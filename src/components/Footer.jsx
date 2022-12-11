import React from "react";
import { social } from "../assets/data/social";
import "../styles/Footer.scss";

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="footer text-center pt-5">
      {/* <!-- Grid container --> */}
      <div className="container p-4">
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links --> */}
        <section className="">
          <div className="row mt-5">
            <div className="col-md-2 mb-3 a">
              <h6 className="FooterLinks">About Us</h6>
            </div>

            <div className="col-md-2 mb-3 a">
              <h6 className="FooterLinks">Blog</h6>
            </div>

            <div className="col-md-2 mb-3  a">
              <h6 className="FooterLinks">Terms & Conditions</h6>
            </div>

            <div className=" col-md-2 mb-3 a">
              <h6 className="FooterLinks">Privacy Policy</h6>
            </div>

            <div className=" col-md-2 mb-3 a">
              <h6 className="FooterLinks">Offers & Gift Cards</h6>
            </div>

            <div className=" col-md-2 mb-3 a">
              <h6 className="FooterLinks">Contact Us</h6>
            </div>
          </div>
        </section>
      </div>
      <div className="container downloadAppSection mb-2">
      <span>Download Oyebusy App  <a href="https://www.google.com"><img src={social.playstore} alt="" /></a></span>
      </div>

      <section className="mb-0 socialRow">
        {/* <!-- Instagram --> */}
        <a className="social" href="https://www.intsagram.com" role="button">
          <img className="socialIcons" src={social.insta} alt="" />
        </a>
        {/* <!-- Twitter --> */}
        <a className="social" href="https://www.twitter.com" role="button">
          <img className="socialIcons" src={social.twitter} alt="" />
        </a>
        {/* <!-- LinkedIn --> */}
        <a className="social" href="https://www.linkedin.com" role="button">
          <img className="socialIcons" src={social.linkedin} alt="" />
        </a>
        {/* <!-- Facebook --> */}
        <a className="social" href="https://www.facebook.com" role="button">
          <img className="socialIcons" src={social.facebook} alt="" />
        </a>
        {/* <!-- Youtube --> */}
        <a className="social" href="https://www.youtube.com" role="button">
          <img className="socialIcons" src={social.youtube} alt="" />
        </a>
        {/* <!-- Pintrest --> */}
        <a className="social" href="https://www.pinterest.com" role="button">
          <img className="socialIcons" src={social.pintrest} alt="" />
        </a>
      </section>
      {/* <!-- Section: Social media --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center FooterLinks p-3">
        © 2022 House Cleaning Expert
      </div>
    </footer>
  );
};

export default Footer;
