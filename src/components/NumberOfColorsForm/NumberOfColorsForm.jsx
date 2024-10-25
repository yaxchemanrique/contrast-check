import { useContext, useState } from "react";
import { Check, Plus } from "react-feather";

import { ColorsContext } from "../../providers/ColorsProvider.jsx";

import Button from "../Button/Button.jsx";
import ColorInput from "../ColorInput/ColorInput.jsx";

import styles from './NumberOfColorsForm.module.css'

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
    <form className={styles.numberOfColorsForm} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.numberOfColorsContainer}>
        <label htmlFor="number-of-colors">Numero de colores en tu paleta:</label>
        <div className={styles.numberOfColorsInputs}>
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
        </div>
      </div>
      {areColorInputsShowing && (
        <div className={styles.colorInputsContainer}>
          {colors.map(({id, value, colorName}, index) => (
            <ColorInput key={`${id}-${value}`} id={id} value={value} initialColorName={colorName} colorNumber={index + 1} />
          ))}
        </div>
      )}
      <div className={styles.addColorButton}>
        <Button clickFunction={handleNewColor} icon={<Plus />}>
          agregar un color
        </Button>
      </div>
    </form>
  );
}

export default NumberOfColorsForm;
