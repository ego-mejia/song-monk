import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
