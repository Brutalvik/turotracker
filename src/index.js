import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//Redux Toolkit
import { store } from "./app/store";
import { Provider } from "react-redux";

//Chakra UI Theme
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import { config } from "theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ColorModeScript initialColorMode={config.initialColorMode} />
      <ChakraProvider theme={config}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
