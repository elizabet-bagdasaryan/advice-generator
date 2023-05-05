import { useEffect, useState } from "react";
import HR from "./assets/hr.png";
import HRDesk from "./assets/hr-desktop.png";
import Dice from "./assets/dice.png";
import "./App.css";

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  const [advices, setAdvices] = useState([
    { advice: "Loading advice...", id: 0 },
  ]);

  const handleClick = () => {
    setIsAnimated(true);
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvices([data.slip]))
      .catch((err) => console.log(err));
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
        {advices.length > 0 &&
          advices.map((r, i) => (
            <div key={i}>
              <p>ADVICE #{r.id}</p>
              <p>{r.advice}</p>
            </div>
          ))}
        <img src={HRDesk} className="hr" />
        <div
          className={`dice-wrapper ${isAnimated ? "animate-toggle-down" : ""}`}
          onClick={handleClick}
          onAnimationEnd={handleAnimationEnd}
        >
          <img src={Dice} className="dice" onClick={handleClick}></img>
        </div>
      </div>

      <div className="advices"></div>
    </>
  );
}

export default App;
