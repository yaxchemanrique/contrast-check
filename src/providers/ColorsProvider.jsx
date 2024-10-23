import { createContext, useState } from "react";
import { range } from "../utils";

export const ColorsContext = createContext();

function ColorsProvider({ children }) {
  const [colors, setColors] = useState([]);
  const initialValue = "#000000";

  function createInitialColorsArray(length) {
    const lengthNumber = Number(length);
    let nextColors = [];
    range(lengthNumber).forEach((num) =>
      nextColors.push({ id: crypto.randomUUID(), value: initialValue })
    );
    setColors(nextColors);
  }

  function updateColorsArray(id, value) {
    let nextColors = [...colors];
    const colorToUpdateIndex = nextColors.findIndex((color) => color.id === id);
    let colorUpdated = nextColors.filter((color) => color.id === id)[0];
    colorUpdated.value = value;
    nextColors[colorToUpdateIndex] = colorUpdated;
    setColors(nextColors);
  }

  function addNewColor(value) {
    let newColor = {
      id: crypto.randomUUID(),
      value: value,
    }
    setColors([...colors, newColor]);
  }

  function removeColor(id) {
    let nextColors = colors.filter((color) => color.id !== id);
    setColors(nextColors)
  }

  const value = {
    colors,
    createInitialColorsArray,
    updateColorsArray,
    addNewColor,
    removeColor,
  };

  return (
    <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>
  );
}

export default ColorsProvider;
