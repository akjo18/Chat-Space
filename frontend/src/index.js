import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import ChatProvider from "./Context/ChatProvider";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>{" "}
    </ChatProvider>{" "}
  </BrowserRouter>,
  document.getElementById("root")
);
