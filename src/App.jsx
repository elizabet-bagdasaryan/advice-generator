import { useEffect, useState } from "react";
import HR from "./assets/hr.png";
import HRDesk from "./assets/hr-desktop.png";
import Dice from "./assets/dice.png";
import "./App.css";

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [advices, setAdvices] = useState([]);

  const handleClick = () => {
    setIsAnimated(true);
  };

  const handleAnimationEnd = () => {
    setIsAnimated(false);
  };

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvices([data.slip]))
      .catch((err) => console.log(err));
  }, []);

  console.log(advices);
  return (
    <>
      <div className="box">
        <p>ADVICE #117</p>
        <p>
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>
        <img src={HRDesk} className="hr" />
        <div
          className={`dice-wrapper ${isAnimated ? "animate-toggle-down" : ""}`}
          onClick={handleClick}
          onAnimationEnd={handleAnimationEnd}
        >
          <img src={Dice} className="dice"></img>
        </div>
      </div>

      <div className="advices">
        {advices.length > 0 ? (
          advices.map((r, i) => (
            <p key={i}>
              {r.id} {r.advice}
            </p>
          ))
        ) : (
          <p>Loading advice...</p>
        )}
      </div>
    </>
  );
}

export default App;
