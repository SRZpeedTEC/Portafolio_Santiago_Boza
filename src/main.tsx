import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/tokens.css";
import "./styles/globals.css";
import "./styles/utilities.css";

const rootElement = document.getElementById("root");

// The explicit root check keeps startup failures understandable during local setup.
if (!rootElement) {
  throw new Error("Root element was not found.");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
