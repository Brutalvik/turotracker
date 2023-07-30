import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Chakra UI Theme
import { ColorModeScript } from "@chakra-ui/react";
import { config } from "theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={config.initialColorMode} />
    <App />
  </React.StrictMode>
);
