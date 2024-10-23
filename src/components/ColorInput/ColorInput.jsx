import { useState } from "react";
import styles from "./ColorInput.module.css";
import Button from "../Button/Button";
import { Trash } from "react-feather";

function ColorInput({ colorNumber }) {
  const [color, setColor] = useState("#000000");
  const [colorName, setColorName] = useState("");

  return (
    <div>
      <label htmlFor={`color-input-${colorNumber}`}>Color {colorNumber}:</label>
      <input
        type="color"
        id={`color-input-${colorNumber}`}
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <label htmlFor={`color-name-${colorNumber}`}>nombre del color:</label>
      <input
        type="text"
        id={`color-name-${colorNumber}`}
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
      />
      <Button icon={<Trash size={18} strokeWidth={1.5} />} />
    </div>
  );
}

export default ColorInput;
