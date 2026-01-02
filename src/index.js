import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/HomePage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootLayout>
      <HomePage />
    </RootLayout>
  </React.StrictMode>
);
