import React from "react";
import logo from "../assets/logos/Group 7077.png";
import whatsapp from "../assets/logos/whatsapp.png";
import phone from "../assets/logos/Phone.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
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



const Navbar2 = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-primary navbar-expand-lg bg-light navbar-light ">
        {/* <!-- Container wrapper --> */}
        <div className="container-fluid con">
          {/* <!-- Toggle button --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* <!-- Navbar brand --> */}
          <a className="navbar-brand" href="/">
            <img src={logo} className="navlogo" alt="logo" />
            <div className="cleaningExpert">
              <span>Cleaning</span>
              <span>Expert</span>
            </div>
            <span className="navcontactlogo d-flex flex-row">
              <a type="button" href="https://wa.me/919999999999"> <img className="whatsapplogo" src={whatsapp} alt="" /></a>
              <a href="https://www.google.com"> <img className="whatsapplogo" src={phone} alt="" /></a>
             
            </span>
          </a>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav navbar-nav1 me-auto mb-2 mb-lg-0">
              {/* <!-- Link --> */}
              {/* <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link>
              </li> */}
            </ul>

            {/* <!-- Icons --> */}
            <ul className="navbar-nav navbar-nav2 d-flex align-items-center">
              {/* <!-- Dropdown --> */}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pest Control <i className="fas fa-angle-down"></i>
                  <span className="divider"></span>
                </Link>
                {/* <!-- Dropdown menu --> */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {/* {dropdowns.map((item) =>
                    item.options.map((subItem) =>
                      <li key={subItem.oid}>
                        <Link className="dropdown-item" to="/">{subItem.name}</Link>
                      </li>
                    ))} */}
                    {map1}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home Cleaning <i className="fas fa-angle-down"></i>{" "}
                  <span className="divider"></span>
                </Link>
                {/* <!-- Dropdown menu --> */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {dropdowns.map((item) =>
                    item.options.map((subItem) => {
                      return (
                        <li
                          className="dropdown-item"
                          to={subItem.link}
                          key={subItem.oid}
                        >
                          <Link className="dropdown-item" to="/">
                            {subItem.name}
                          </Link>
                        </li>
                      );
                    })
                  )}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Covid Disinfection
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fas fa-shopping-cart">
                    <span className="supscript">2</span>
                  </i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <span className="free-quotes">Free quotes</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </>
  );
};

export default Navbar2;
