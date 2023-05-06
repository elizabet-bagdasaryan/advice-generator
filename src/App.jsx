import { useEffect, useState } from "react";
import HR from "./assets/hr-desktop.png";
import Dice from "./assets/dice.png";
import "./App.css";
import ColorPalette from "./ColorPalette";
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

  const [yellow, setYellow] = useState(false);
  const [green, setGreen] = useState(false);
  const [blue, setBlue] = useState(false);
  const [purple, setPurple] = useState(false);
  const [pink, setPink] = useState(false);

  const handleYellow = () => {
    setYellow(true);
    setGreen(false);
    setBlue(false);
    setPurple(false);
    setPink(false);
  };

  const handleGreen = () => {
    setGreen(true);
    setYellow(false);
    setBlue(false);
    setPurple(false);
    setPink(false);
  };

  const handleBlue = () => {
    setBlue(true);
    setGreen(false);
    setYellow(false);
    setPurple(false);
    setPink(false);
  };

  const handlePurple = () => {
    setPurple(true);
    setGreen(false);
    setBlue(false);
    setYellow(false);
    setPink(false);
  };

  const handlePink = () => {
    setPink(true);
    setGreen(false);
    setBlue(false);
    setPurple(false);
    setYellow(false);
  };

  return (
    <>
      <ColorPalette
        handleYellow={handleYellow}
        handleGreen={handleGreen}
        handleBlue={handleBlue}
        handlePurple={handlePurple}
        handlePink={handlePink}
        yellow={yellow}
        green={green}
        blue={blue}
        purple={purple}
        pink={pink}
      />
      <div className="box">
        {advices.length > 0 &&
          advices.map((r, i) => (
            <div key={i}>
              <p
                style={{
                  color: yellow
                    ? "#ffff33"
                    : "" || green
                    ? "#53ffaa"
                    : "" || blue
                    ? "#10d8c4"
                    : "" || purple
                    ? "#9900ff"
                    : "" || pink
                    ? "#ff0099"
                    : "",
                }}
              >
                ADVICE #{r.id}{" "}
              </p>
              <p>{r.advice}</p>
            </div>
          ))}
        <img src={HR} className="hr" />
        <div
          className={`dice-wrapper ${isAnimated ? "animate-toggle-down" : ""} ${
            yellow ? "yellow" : ""
          }
          ${green ? "green" : ""}
          ${blue ? "blue" : ""}
          ${purple ? "purple" : ""}
          ${pink ? "pink" : ""}`}
          onClick={handleClick}
          onAnimationEnd={handleAnimationEnd}
        >
          <img
            src={Dice}
            className="dice"
            onClick={handleClick}
            style={{
              color: purple ? "#fff" : "" || pink ? "#fff" : "",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
