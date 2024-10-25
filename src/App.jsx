import { useContext, useEffect } from "react";
import { ColorsContext } from "./providers/ColorsProvider";

import NumberOfColorsForm from "./components/NumberOfColorsForm/NumberOfColorsForm";
import QuoteCard, {
  QuoteCardWithoutSelection,
} from "./components/QuoteCard/QuoteCard";
import ContrastEvaluation from "./components/ContrastEvaluation/ContrastEvaluation";
import ColorCard from "./components/ColorCard/ColorCard";
import ColorCardDescription from "./components/ColorCardDescription/ColorCardDescription";
import ColorCombosContainer from "./components/ColorCombosContainer/ColorCombosContainer";
import ColorPaletteContainer from "./components/ColorPaletteContainer/ColorPaletteContainer";

function App() {
  const { colors, colorCombos, colorCombosContrast, selectedColorCombos } =
    useContext(ColorsContext);

  return (
    <div>
      <NumberOfColorsForm />
      <h2>Tus combinaciones</h2>
      <ColorCombosContainer>
        {colorCombos.length > 0 ? (
          colorCombosContrast.map((combo) => (
            <div key={`combos-${combo.id}`}>
              <QuoteCard
                id={combo.id}
                background={combo.background}
                foreground={combo.foreground}
              />
              <ContrastEvaluation
                overall={combo.overall}
                contrast={combo.contrast}
                large={combo.large}
                small={combo.small}
                type={combo.overall === "Yup" ? "yes" : "no"}
                stars={
                  combo.overall === "Yup"
                    ? 5
                    : combo.overall === "Kinda"
                    ? 3
                    : 1
                }
              />
            </div>
          ))
        ) : (
          <div>
            <p>No has seleccionado ningún color</p>
            <img src="/help-add-colors.gif" />
          </div>
        )}
      </ColorCombosContainer>
      <h2>Tus paleta de colores</h2>
      <ColorPaletteContainer>
        {colors.map((color) => (
          <ColorCard key={color.id} color={color.value} name={color.colorName}/>
        ))}
      </ColorPaletteContainer>
      <h2>Tus combinaciones selccionadas</h2>
      <ColorCombosContainer>
        {selectedColorCombos.length > 0 ? (
          selectedColorCombos.map((selected) => {
            return (
              <div key={`selected-${selected.id}`}>
                <QuoteCardWithoutSelection
                  background={selected.background}
                  foreground={selected.foreground}
                />
                <ColorCardDescription
                  background={selected.background}
                  foreground={selected.foreground}
                />
              </div>
            );
          })
        ) : (
          <div>
            <p>No has seleccionado ninguna combinación</p>
            <img src="/help-selection.gif" />
          </div>
        )}
      </ColorCombosContainer>
    </div>
  );
}

export default App;
