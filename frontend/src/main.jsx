import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

const app = ReactDOM.createRoot(document.getElementById("root"));

app.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
