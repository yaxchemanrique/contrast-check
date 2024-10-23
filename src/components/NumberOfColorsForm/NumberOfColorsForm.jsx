import { useState } from "react";
import { Check, Plus } from "react-feather";
import { range } from "../../utils.js";

import Button from "../Button/Button.jsx";
import ColorInput from "../ColorInput/ColorInput.jsx";

function NumberOfColorsForm() {
  const [numberOfColors, setNumberOfColors] = useState(0);

  function handleNewColor() {
    setNumberOfColors((current) => Number(current) + 1);
  }
  
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="number-of-colors">Numero de colores en tu paleta:</label>
      <input
        type="number"
        id="number-of-colors"
        value={numberOfColors}
        onChange={(e) => setNumberOfColors(e.target.value)}
      />
      <Button icon={<Check />}>confirmar</Button>
      {numberOfColors > 0 && (
        <div>
          {range(numberOfColors).map((num) => (
            <ColorInput colorNumber={num + 1} />
          ))}
        </div>
      )}
      <Button clickFunction={handleNewColor} icon={<Plus />}>agregar un color</Button>
    </form>
  );
}

export default NumberOfColorsForm;
