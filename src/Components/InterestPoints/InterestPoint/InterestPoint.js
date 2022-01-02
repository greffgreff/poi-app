import React from "react";
import "./InterestPoint.css";
import "../../Styling/CategoryCodes.css";

export default function InterestPoint({ interest }) {
  return (
    <div key={interest.id} className={`${interest.code} interest-point`}>
      <div className="one-liner">
        <h3>{interest.name}</h3>
        <div>
          {interest.categories.map((category) => {
            return (
              <p key={category} className={`${interest.code} category`}>
                {category}
              </p>
            );
          })}
        </div>
      </div>
      {interest.phone ? <p>{interest.phone}</p> : null}
      {interest.url ? <p>{interest.url}</p> : null}
    </div>
  );
}
