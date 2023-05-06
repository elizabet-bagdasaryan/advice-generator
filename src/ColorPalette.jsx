import { useState } from "react";
import "./ColorPalette.css";
import PaletteIcon from "@mui/icons-material/Palette";

function ColorPalette(props) {
  const [isAnimatedPalette, setIsAnimatedPalette] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [paletteKey, setPaletteKey] = useState(0);

  function handleDisplay() {
    setIsAnimatedPalette(true);
    setIsActive((current) => !current);
    setPaletteKey((current) => current + 1);
  }

  const handlePaletteAnimationEnd = () => {
    setIsAnimatedPalette(false);
  };

  return (
    <>
      <div className="container animate flip">
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="one animate pop delay-1"
          onClick={props.handleYellow}
        ></div>
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="two animate slide delay-2"
          onClick={props.handleGreen}
        ></div>
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="three animate blur delay-3"
          onClick={props.handleBlue}
        >
          {" "}
        </div>
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="four animate grow delay-4"
          onClick={props.handlePurple}
        >
          {" "}
        </div>
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="five animate splat delay-5"
          onClick={props.handlePink}
        >
          {" "}
        </div>
        <PaletteIcon
          key={paletteKey}
          className={`palette ${isAnimatedPalette ? "animate-toggle" : ""}`}
          onClick={handleDisplay}
          onAnimationEnd={handlePaletteAnimationEnd}
        ></PaletteIcon>
      </div>
    </>
  );
}

export default ColorPalette;
