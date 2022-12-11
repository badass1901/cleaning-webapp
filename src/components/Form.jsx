import React from "react";
import "../styles/Form.scss";
import { Link } from "react-router-dom";
import dropdowns from "../assets/data/dropdowns";
// eslint-disable-next-line array-callback-return
const map1 = dropdowns[0].options[13].subOptions.map((item) => {
    return (
      <li key={item.sid}>
        <Link className="dropdown-item" to="/">
          {item.name}
        </Link>
      </li>
    );
 
});

const Form = (props) => {
  return (
    <div className="container mb-6 card mt-4 py-4 formG">
      <form className="card-body">
        <div className="row mb-4">
          <div className="dropdown">
            <button
              className="dropdown-toggle dt"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Select Pest Control-Options <i className="fas fa-angle-down"></i>
            </button>
            <ul
              className="dropdown-menu dm"
              aria-labelledby="dropdownMenuButton"
            >
              {/* {dropdowns.map((item, index) =>
                item.options.map((subItem) => {
                  return (
                    <li key={subItem.oid}>
                      <a className="dropdown-item" href="#">
                        {subItem.name}
                      </a>
                    </li>
                  );
                })
              )} */}

              {map1}
            </ul>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            <input
              type="text"
              id="form3Example"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="col">
            <input
              type="number"
              id="form3Example2"
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div className="col mb-3">
          <input
            type="text"
            placeholder="Pincode or Address"
            className="form-control"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary mt-1 mb-4 text-capitalize submitBtn"
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

export default Form;
