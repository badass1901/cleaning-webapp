import React from "react";
import "../styles/FormI.scss";
import { Link } from "react-router-dom";
import dropdowns from "../assets/data/dropdowns";

// eslint-disable-next-line array-callback-return
const map1 = dropdowns[0].options[2].subOptions.map((item) => {
    return (
      <li key={item.sid}>
        <Link className="dropdown-item" to="/">
          {item.name}
        </Link>
      </li>
    );
 
});

const FormI = () => {
  return (
    <div className="container card mt-3 py-4 formI">
      <form className="card-body mt-4">
        <div className="row mb-2">
          <div className="dropdown">
            <button
              className="dropdown-toggle dt"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Select House Cleaning-Options{" "}
              <i className="fas fa-angle-down"></i>
            </button>
            <ul
              className="dropdown-menu dm"
              aria-labelledby="dropdownMenuButton"
            >
             {map1}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2">
            <input
              type="text"
              id="form3Example"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
        </div>
        <div className="row5">
        <div className="col mb-2 col1">
          <input
            type="number"
            placeholder="Phone Number"
            className="form-control"
          />
        </div>
        <div className="col mb-2">
          <input
            type="text"
            placeholder="Pincode or Address"
            className="form-control"
          />
        </div>
        </div>
        
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary mt-2 mb-2 text-capitalize submitBtn"
          >
            Submit
          </button>
        </div>

        <div className="text-center">
          <p>Average call back time: 12 min (Last update 5 mins ago)</p>
        </div>
      </form>
    </div>
  );
};

export default FormI;
