import React from "react";
import "../styles/ChooseServiceMobile.scss";
import { chooseServiceImage } from "../assets/data/chooseServiceImage";
function ChooseServiceMobile() {
  return (
    <div className="card chooseServiceMobile mb-7">
      <div className="card-body">
        <h1 className="text-black">Choose Our Services</h1>
        <div className="row rowM">
          <div className="col-md-4 rows">
            <div
              className="d-flex flex-row align-items-center justify-content-between"
            >
              <div className="d-flex flex-row align-items-center">
                <img
                  src={chooseServiceImage.chooseService1}
                  className="mobileServiceImage"
                  alt=""
                />
                <h5 className="serviceTitleMobile">Sofa Deep Cleaning </h5>
              </div>
              <i className="fas fs-6x fa-angle-right"></i>
            </div>
          </div>
          <div className="col-md-4 rows">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img
                  src={chooseServiceImage.chooseService2}
                  className="mobileServiceImage"
                  alt=""
                />
                <h5 className="serviceTitleMobile">House Cleaning Services </h5>
              </div>

              <i className="fas fs-6x fa-angle-right"></i>
            </div>
          </div>
          <div className="col-md-4 rows">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img
                  src={chooseServiceImage.chooseService3}
                  className="mobileServiceImage"
                  alt=""
                />
                <h5 className="serviceTitleMobile">Bathroom Deep Cleaning </h5>
              </div>
              <i className="fas fs-6x fa-angle-right"></i>
            </div>
          </div>
          <div className="col-md-4 rows">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img
                  src={chooseServiceImage.chooseService4}
                  className="mobileServiceImage"
                  alt=""
                />
                <h5 className="serviceTitleMobile">Kitchen Deep Cleaning </h5>
              </div>
              <i className="fas fs-6x fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseServiceMobile;
