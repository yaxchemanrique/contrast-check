import { createContext, useEffect, useState, useMemo } from "react";
import { range } from "../utils";

export const ColorsContext = createContext();

const accessibleColorsApi =
  "https://www.aremycolorsaccessible.com/api/are-they";

function ColorsProvider({ children }) {
  const initialValue = "#000000";

  const [colors, setColors] = useState([]);
  const [colorCombosContrast, setColorCombosContrast] = useState([]);
  const [selectedColorCombos, setSelectedColorCombos] = useState([]);

  const colorCombos = useMemo(() => createCombos(colors), [colors]);

  useEffect(() => {
    async function fetchAllCombosContrast() {
      if (colorCombos.length > 0) {
        const contrastData = await createCombosContrast(colorCombos);
        setColorCombosContrast(contrastData);
      }
    }
    fetchAllCombosContrast();
  }, [colorCombos]);

  async function fetchContrast(colorA, colorB) {
    const response = await fetch(accessibleColorsApi, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify({ colors: [colorA, colorB] }),
    });
    const data = await response.json();
    const contrastObj = {
      ...data,
      background: colorA,
      foreground: colorB,
    };
    return contrastObj;
  }

  async function createCombosContrast(combos) {
    let combosContrast = [];
    for (let i = 0; i < combos.length; i++) {
      const comboContrast = await fetchContrast(
        combos[i].background,
        combos[i].foreground
      );
      combosContrast.push({ ...comboContrast, id: combos[i].id });
    }
    return combosContrast;
  }

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
    };
    const nextColors = [...colors, newColor];
    setColors(nextColors);
  }

  function removeColor(id) {
    let nextColors = colors.filter((color) => color.id !== id);
    setColors(nextColors);
  }

  function createCombos(colorsArr) {
    let colorCombos = [];
    for (let i = 0; i < colorsArr.length; i++) {
      for (let j = 0; j < colorsArr.length; j++) {
        if (colorsArr[i].value === colorsArr[j].value) continue;
        const combo = {
          id: crypto.randomUUID(),
          background: colorsArr[i].value,
          foreground: colorsArr[j].value,
        };
        colorCombos.push(combo);
      }
    }
    return colorCombos;
  }

  function handleComboSelection(action, id) {
    let nextCombos = [];
    if (action === "add") {
      const selectedCombo = colorCombosContrast.filter(
        (combo) => combo.id === id
      )[0];
      nextCombos = [...selectedColorCombos, selectedCombo];
    } else if (action === "remove" && selectedColorCombos.length === 1) {
      nextCombos = [];
    } else if (action === "remove" && selectedColorCombos.length > 1) {
      nextCombos = colorCombosContrast.filter((combo) => combo.id !== id);
    }
    setSelectedColorCombos(nextCombos);
  }

  const value = {
    colors,
    createInitialColorsArray,
    updateColorsArray,
    addNewColor,
    removeColor,
    colorCombos,
    colorCombosContrast,
    handleComboSelection,
    selectedColorCombos,
  };

  return (
    <ColorsContext.Provider value={value}>{children}</ColorsContext.Provider>
  );
}

export default ColorsProvider;
