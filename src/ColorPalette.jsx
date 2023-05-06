import { useState } from "react";
import "./ColorPalette.css";
import PaletteIcon from "@mui/icons-material/Palette";

function ColorPalette() {
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
        ></div>
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="two animate slide delay-2"
        ></div>
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="three animate blur delay-3"
        >
          {" "}
        </div>
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="four animate grow delay-4"
        >
          {" "}
        </div>
        <div
          style={{ display: isActive ? "block" : "none" }}
          className="five animate splat delay-5"
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
