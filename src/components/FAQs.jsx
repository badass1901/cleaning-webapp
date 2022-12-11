import React from "react";
import "../styles/FAQs.scss";

function FAQs() {
  return (
    <div className="FAQ">
      <h1 className="text-black faq-heading">
        FAQ's Before Home Cleaning Servives in Delhi NCR
      </h1>
      <div className="FAQ-d container">
        {/* <!-- Buttons trigger collapse --> */}
        <span
          className="btn-block faq-toggle"
          data-mdb-toggle="collapse"
          href="#collapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <p> What is not answered?</p>
         <i className="fas fa-angle-down collapseIcon"></i>
        </span>
        <div className="collapse mt-3 cs" id="collapseExample1">
          Amazing service! Really liked it. The electrician was a good person
          with decent attitude. Satisfactory and thorough service in geyser
          repair.
        </div>
      </div>
      <div className="FAQ-d container">
        {/* <!-- Buttons trigger collapse --> */}
        <span
          className="btn-block faq-toggle"
          data-mdb-toggle="collapse"
          href="#collapseExample2"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
         <p> What is not answered?</p>
         <i className="fas fa-angle-down collapseIcon"></i>
        </span>
        <div className="collapse mt-3 show cs" id="collapseExample2">
          Amazing service! Really liked it. The electrician was a good person
          with decent attitude. Satisfactory and thorough service in geyser
          repair.
        </div>
      </div>
      <div className="FAQ-d container">
        {/* <!-- Buttons trigger collapse --> */}
        <span
          className="btn-block faq-toggle"
          data-mdb-toggle="collapse"
          href="#collapseExample3"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
         <p> What is not answered?</p>
         <i className="fas fa-angle-down collapseIcon"></i>
        </span>
        <div className="collapse mt-3 cs" id="collapseExample3">
          Amazing service! Really liked it. The electrician was a good person
          with decent attitude. Satisfactory and thorough service in geyser
          repair.
        </div>
      </div>
    </div>
  );
}

export default FAQs;
