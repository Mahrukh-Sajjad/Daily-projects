import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Wrapper from "./components/Wrapper";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Wrapper>
      <App />
    </Wrapper>
  </BrowserRouter>
);
