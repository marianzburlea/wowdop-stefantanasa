import React from "react";
import dots from "../data/dots.png";
import { useNavigate } from "react-router-dom";

export const Card = ({ profile }) => {
  let navigate = useNavigate();
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
        <p className="old-salary">previous salary {profile.prev_salary}</p>
        <div className="currency">
          <strong className="new-salary">£{profile.current_salary}/year</strong>
        </div>
        <div className="income">
          <span>income</span>
          <button>View more</button>
        </div>
      </div>
    </main>
  );
};
