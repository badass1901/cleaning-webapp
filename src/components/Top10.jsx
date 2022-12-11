import React from "react";
import "../styles/Top10.scss";
import top110 from "../assets/data/top110";

function Top10() {
  return (
    <div className="top10">
      <div className="box container">
        <h1 className="boxHeading">Top 10 House Cleaning Service in Delhi NCR :</h1>
        {top110.map((item) => {
          return (
            <div className="top10-item" key={item.id}>
              <p className="itemTitle">{item.title}</p>
              <hr />
              <ol className="orderedList">
                {item.description.map((item) => {
                  return <li className="liItems" key={item.id}>{item.name}</li>;
                })}
              </ol>
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Top10;
