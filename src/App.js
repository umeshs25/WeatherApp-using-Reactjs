import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="">
          Umesh Sahu
        </a>{" "}
        | B.Tech Final Year at{" "}
        <a target="_blank" href="">
          BIT Durg
        </a>{" "}
        | Detabotics{" "}
        <a target="_blank" href="">
          Internship
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
