import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Screen from "./Screen";
import Card from "./Card";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Screen />} />
      <Route exact path="/card" element={<Card />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
