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
      <div className="colors-wrapper">
        <div style={{ display: isActive ? "block" : "none" }}></div>
        <div style={{ display: isActive ? "block" : "none" }}></div>
        <div style={{ display: isActive ? "block" : "none" }}> </div>
        <div style={{ display: isActive ? "block" : "none" }}> </div>
        <div style={{ display: isActive ? "block" : "none" }}> </div>
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
