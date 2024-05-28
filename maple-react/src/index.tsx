import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import './assets/scss/index.scss';

const rootNode = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootNode).render(
  <App />
);