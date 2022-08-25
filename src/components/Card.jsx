import React from "react";
import dots from "../data/dots.png";

export const Card = ({ profile }) => {
  return (
    <main className="card-container">
      <div className="square">
        <img src={dots} alt="" srcset="" />
      </div>
      <img src={profile.profile_pic || "https://bit.ly/3T8dw4x"} alt="" />
      <div className="job-title">
        <h2>{profile.position}</h2>
      </div>
      <div className="details">
        <p className="old-salary">{profile.prev_salary}</p>
        <div className="currency">
          <span style={{ background: "#4af0ab" }}>£</span>
          <span>$</span>
          <span>RON</span>
        </div>
        <div className="income">
          <span>income</span>
          <div className="new-salary">{profile.current_salary}/year</div>
        </div>
      </div>
    </main>
  );
};
