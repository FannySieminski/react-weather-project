import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Preselectedcities from "./Preselectedcities";
import Search from "./Search";
import Currentcity from "./Currentcity";
import Currentforecast from "./Currentforecast";
import Forecast from "./Forecast";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    function App(){" "}
    {
      <div className="App">
        <div class="container">
          <div class="card main-card">
            <div class="card-body">
              <Preselectedcities />
              <br />
              <Search />
              <br />
              <Currentcity />
              <br />
              <Currentforecast />
              <br />
              <Forecast />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    }
    return function App();
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
