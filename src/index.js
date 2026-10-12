import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./layout/RootLayout";
import AppRouter from "./AppRouter";
import "./index.css";
import "./divisionVisual.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootLayout>
      <AppRouter />
    </RootLayout>
  </React.StrictMode>
);
