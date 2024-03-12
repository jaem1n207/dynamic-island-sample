import React from "react";
import ReactDOM from "react-dom/client";
import Playground from "./playground.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>
);
