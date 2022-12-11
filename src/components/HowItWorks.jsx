import React from "react";
import "../styles/HowItWorks.scss";
import g1 from "../assets/logos/g1.png";
import g2 from "../assets/logos/g2.png";
import g3 from "../assets/logos/g3.png";
import g4 from "../assets/logos/g4.png";

function HowItWorks() {
  return (
    <div className="howItWorks">
       
      <p className="header text-center">How it works</p>
      <span className="underline" />
      <div className="row row1">
        <div className="col-lg-1 howItWorksColumn">
          <span className="howItWorksLogo">
            <img src={g1} alt="" />
          
          </span>
         
          <div>
            <p className="pHead">Choose the Appliances</p>
            <p className="pSmall">Select the Service required</p>
          </div>
          <span className="dash"></span>
        </div>
        <div className="col-lg-1 howItWorksColumn">
          <span className="howItWorksLogo">
            <img src={g2} alt="" />
          </span>
          <div>
            <p className="pHead">Choose your time-slot</p>
            <p className="pSmall">We serve from 9am-9pm</p>
          </div>
          <span className="dash2"></span>
        </div>
        <div className="col-lg-1 howItWorksColumn">
          <span className="howItWorksLogo">
            <img src={g3} alt="" />
          </span>
          <div>
            <p className="pHead">Choose from our partners</p>
            <p className="pSmall">Verified Professionals</p>
          </div>
          <span className="dash3"></span>
        </div>
        <div className="col-lg-1 howItWorksColumn">
          <span className="howItWorksLogo">
            <img src={g4} alt="" />
          </span>
          <div>
            <p className="pHead">Hassle-free service</p>
            <p className="pSmall">24*7, verifed professionals</p>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default HowItWorks;
