import React from "react";
import "../styles/chooseServices.scss";
import { chooseServiceImage } from "../assets/data/chooseServiceImage";
import ChooseServiceMobile from "./ChooseServiceMobile";

function ChooseServise() {
  return (
    <div>
      <div className="container">
       
        <ChooseServiceMobile />
<div className="chooseServices">
<h1 className="text-center text-black">Choose Servise</h1>
        <div className="imageCards">
          <div className="card text-center cardService ">
            <div className="card-image">
              <img
                src={chooseServiceImage.chooseService1}
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="card-body card-bodyService">
              <h5 className="card-title">Sofa Deep Cleaning</h5>
            </div>
          </div>
          <div className="card cardService text-center ">
            <div className="card-image">
              <img
                src={chooseServiceImage.chooseService2}
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="card-body card-bodyService">
              <h5 className="card-title">Sofa Deep Cleaning</h5>
            </div>
          </div>
          <div className="card cardService text-center ">
            <div className="card-image">
              <img
                src={chooseServiceImage.chooseService3}
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="card-body card-bodyService">
              <h5 className="card-title">Sofa Deep Cleaning</h5>
            </div>
          </div>
          <div className="card cardService text-center ">
            <div className="card-image"> 
              <img
                src={chooseServiceImage.chooseService4}
                className="img-fluid"
                alt="img"
              />
            </div>
            <div className="card-body card-bodyService">
              <h5 className="card-title">Sofa Deep Cleaning</h5>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseServise;
