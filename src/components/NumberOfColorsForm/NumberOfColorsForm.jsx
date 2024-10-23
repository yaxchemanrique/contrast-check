import { useContext, useState } from "react";
import { Check, Plus } from "react-feather";

import Button from "../Button/Button.jsx";
import ColorInput from "../ColorInput/ColorInput.jsx";
import { ColorsContext } from "../../providers/ColorsProvider.jsx";

function NumberOfColorsForm() {
  const [numberOfColors, setNumberOfColors] = useState(0);
  const [areColorInputsShowing, setAreColorInputsShowing] = useState(false);

  const { colors, createInitialColorsArray, addNewColor } =
    useContext(ColorsContext);

  function handleConfirmButton() {
    createInitialColorsArray(numberOfColors)
    if (numberOfColors > 0) setAreColorInputsShowing(true);
  }

  function handleNewColor() {
    setNumberOfColors((current) => Number(current) + 1);
    addNewColor('#000000');
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="number-of-colors">Numero de colores en tu paleta:</label>
      <input
        type="number"
        id="number-of-colors"
        value={numberOfColors}
        onChange={(e) => {
          setAreColorInputsShowing(false);
          setNumberOfColors(e.target.value);
        }}
      />
      <Button clickFunction={handleConfirmButton} icon={<Check />}>
        confirmar
      </Button>
      {areColorInputsShowing && (
        <div>
          {colors.map(({id, value}, index) => (
            <ColorInput key={id} id={id} value={value} colorNumber={index + 1} />
          ))}
        </div>
      )}
      <Button clickFunction={handleNewColor} icon={<Plus />}>
        agregar un color
      </Button>
    </form>
  );
}

export default NumberOfColorsForm;
