import { useState } from "react";
import HR from "./assets/hr.png";
import HRDesk from "./assets/hr-desktop.png";
import Dice from "./assets/dice.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="box">
        <p>ADVICE #117</p>
        <p>
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>
        <img src={HRDesk} className="hr" />
        <div className="dice-wrapper">
          <img src={Dice} className="dice" />
        </div>
      </div>
    </>
  );
}

export default App;
