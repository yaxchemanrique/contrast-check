import { useState, useContext } from "react";
import { Trash } from "react-feather";
import { ColorsContext } from "../../providers/ColorsProvider";
import Button from "../Button/Button";
import styles from "./ColorInput.module.css";

function ColorInput({ colorNumber, value, id }) {
  const [color, setColor] = useState(value);
  const [colorName, setColorName] = useState("");
  const { removeColor, updateColorsArray } = useContext(ColorsContext);
  
  function handleUpdateColor(value) {
    setColor(value);
    updateColorsArray(id, value)
  }
  
  return (
    <div>
      <label htmlFor={id}>Color {colorNumber}:</label>
      <input
        type="color"
        id={id}
        value={color}
        onChange={(e) => handleUpdateColor(e.target.value)}
      />
      <input
        type="text"
        value={color}
        onChange={(e) => handleUpdateColor(e.target.value)}
      />
      <label htmlFor={`${id}-color-name`}>nombre del color:</label>
      <input
        type="text"
        id={`${id}-color-name`}
        value={colorName}
        onChange={(e) => setColorName(e.target.value)}
      />
      <Button
        clickFunction={() => removeColor(id)}
        icon={<Trash size={18} strokeWidth={1.5} />}
      />
    </div>
  );
}

export default ColorInput;
