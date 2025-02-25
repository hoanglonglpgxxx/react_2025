import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./b1.jsx";
// import App from "./b2.jsx";
// import App from "./b3.jsx";
// import App from "./b4.jsx";
import App from "./b5.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
