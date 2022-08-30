import React, { useState } from "react";
import "./Currentforecast.css";
import axios from "axios";

export default function Currentforecast() {
  let [city, setCity] = useState("paris");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");
  let [cloud, setCloud] = useState("");

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4d36cc9101ca41ceee2cff31c436ac9&units=metric`;
      axios.get(url).then(showWeather);
  function showWeather(response) {
  

    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setCloud(response.data.clouds.all);
    setIcon
      (`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      );
  } 

 
  function updateCity(event) {
    setCity(event.target.value);
    
  }
 
    return (
    <div>
      <div className="enter-city">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="city-entered"
            placeholder="Enter a city..."
            autofocus="on"
            autocomplete="off"
            onChange={updateCity}
          />
          <input className="submit-button" type="submit" value="Search" />
        </form>
      </div>
      
      <div className="citytime">
        {" "}
        <p className="currentcity"> {city} </p>
        <p className="currenttime"> Saturday, 8:30 </p>
      </div>
      <div className="card mb-3 central-card">
        <div className="row g-0">
          <div className="col-md-2">
            <img className="icon" src={icon} alt="weather"
            />
          </div>
          <div className="col-md-3">
            <div className="card-body">
              <div className="temperature">
                <h4>{Math.round(temperature)}</h4> <span className="units">ºC</span>{" "}
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <ul class="current-weather">
              <li>
                Weather: <span className="description">{description}</span>
              </li>
              <li>
                Humidity: <span className="humidity"> {Math.round(humidity)}</span>{" "}
                <strong> %</strong>
              </li>
              <li>
                Wind: <span className="wind"> </span> <strong>{Math.round(wind)} km/h</strong>
              </li>
              <li>
                Clouds: <span className="clouds"> </span> <strong>{cloud} %</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
 
    
  function handleSubmit(event) {
    event.preventDefault();
    
    }
  
 
}
