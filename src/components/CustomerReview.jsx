import React from "react";
import review from "../assets/data/Reviews";
import "../styles/customerReview.scss";

const CustomerReview = () => {
  return (
    <div className="container">
      <h1 className="text-center text-black mb-4">Customer Reviews</h1>
      <h2 className="text-black m-3">Avg. user rating</h2>
      <section className="mb-4 m-3">
      <span className="avgRating"><i className="fas fa-star fa-xs icon"></i> <p>4.76</p></span>
      <small>347K reviews</small>
      </section>
      
     
      <ul>
        {review.map((item) => {
          return (
            <li className="li" key={item.id}>
              <div className="review">
                <div className="card-body">
                  <div className="profile">
                    <img src={item.photo} alt="review" />
                    <div>
                      <span className="card-title">
                        <h6>{item.name}</h6>
                        <h6>
                          <i className="fas fa-star"></i> {item.rating}
                        </h6>
                      </span>
                      <p>
                        {item.time} • {item.city}{" "}
                      </p>
                    </div>
                  </div>
                  <p className="card-text">{item.review}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomerReview;
