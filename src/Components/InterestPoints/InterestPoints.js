import React from "react";
import InterestPoint from "./InterestPoint/InterestPoint";
import "./InterestPoints.css";
import lost from "../../Assets/lost.svg";

export default function InterestPoints({ interests }) {
  return (
    <div className="interest-points">
      <div className="interest-list">
        {interests.map((interest) => {
          return <InterestPoint key={interest.id} interest={interest} />;
        })}
        <img className="trailing-logo" src={lost} />
      </div>
    </div>
  );
}
