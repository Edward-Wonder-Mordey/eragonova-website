import React from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./layout/RootLayout";
import AppRouter from "./AppRouter";
import { initAnalytics } from "./analytics";
import "./index.css";
import "./divisionVisual.css";
import "./accessibility.css";

initAnalytics();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootLayout>
      <AppRouter />
    </RootLayout>
  </React.StrictMode>
);
