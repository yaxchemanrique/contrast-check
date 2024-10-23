import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ColorsProvider from "./providers/ColorsProvider.jsx";
import App from "./App.jsx";
import "./root.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorsProvider>
      <App />
    </ColorsProvider>
  </StrictMode>
);
