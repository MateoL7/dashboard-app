import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/Dashboard";
import { RowProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RowProvider>
    <Dashboard></Dashboard>
  </RowProvider>
);
