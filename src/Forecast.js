import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row next-days">
      <div className="col-2">
        Day+1
        <ul className="weather-day1">
          <li>
            <span className="icon-next-days" role="img" aria-label="icon">
              {" "}
              ☀️{" "}
            </span>{" "}
          </li>
          <li>
            <span className="temperature-next-days">35ºc</span>
          </li>
        </ul>
      </div>
      <div className="col-2">
        Day+2
        <ul className="weather-day2">
          <li>
            <span className="icon-next-days" role="img" aria-label="icon">
              {" "}
              ☀️{" "}
            </span>
          </li>
          <li>
            <span className="temperature-next-days">36ºc</span>
          </li>
        </ul>
      </div>
      <div class="col-2">
        Day+3
        <ul class="weather-day3">
          <li>
            <span className="icon-next-days" role="img" aria-label="icon">
              {" "}
              ☀️{" "}
            </span>
          </li>
          <li>
            <span className="temperature-next-days">38ºc</span>
          </li>
        </ul>
      </div>
      <div className="col-2">
        Day+4
        <ul className="weather-day4">
          <li>
            <span className="icon-next-days" role="img" aria-label="icon">
              {" "}
              ☀️{" "}
            </span>
          </li>
          <li>
            <span className="temperature-next-days">37ºc</span>
          </li>
        </ul>
      </div>
      <div className="col-2">
        Day+5
        <ul className="weather-day5">
          <li>
            <span className="icon-next-days" role="img" aria-label="icon">
              {" "}
              ☀️{" "}
            </span>
          </li>
          <li>
            <span className="temperature-next-days">39ºc</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
