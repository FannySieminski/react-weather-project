import React from "react";
import "./Currentforecast.css";

export default function Currentforecast() {
  return (
    <div className="card mb-3 central-card">
      <div className="row g-0">
        <div className="col-md-2">
          <span className="icon" role="img" aria-label="icon">
            ☀️
          </span>
        </div>
        <div className="col-md-3">
          <div className="card-body">
            <div className="temperature">
              <h4>37</h4> <span className="units">ºC</span>{" "}
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <ul class="current-weather">
            <li>
              Weather: <span className="description">Sunny</span>
            </li>
            <li>
              Humidity: <span className="humidity"> </span> <strong>4 %</strong>
            </li>
            <li>
              Wind: <span className="wind"> </span> <strong>7 km/h</strong>
            </li>
            <li>
              Clouds: <span className="clouds"> </span> <strong>0 %</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
