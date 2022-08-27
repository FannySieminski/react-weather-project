import React from "react";
import "./Preselectedcities.css";

export default function Preselectedcities() {
  return (
    <div className="row">
      <div className="col-2 preselect">Paris</div>
      <div className="col-2 preselect">Madrid</div>
      <div className="col-2 preselect">New-York</div>
      <div className="col-2 preselect">Los Angeles</div>
      <div className="col-4">
        <button className="current-location">Current location</button>
      </div>
    </div>
  );
}
