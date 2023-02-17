import React from "react";
import ReactDOM from "react-dom/client";
import "beercss/dist/cdn/beer.min.css";
import "beercss/dist/cdn/beer.min.js";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
