import React from "react";

export const Card = ({ image }) => {
  return (
    <main className="card-container">
      <img src={image || "https://bit.ly/3T8dw4x"} alt="" />
      <div className="job-title">
        <h2>Web Developer</h2>
      </div>
      <div className="details">
        <p className="old-salary">was earning 12k/year</p>
        <div className="currency">
          <span style={{ background: "#4af0ab" }}>£</span>
          <span>$</span>
          <span>RON</span>
        </div>
        <div className="income">
          <span>income</span>
          <div className="new-salary">30k/year</div>
        </div>
      </div>
    </main>
  );
};
