import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./App";
import "./index.css";

console.log("Starting app initialization...");

const rootElement = document.getElementById("root");
console.log("Root element found:", rootElement);

if (!rootElement) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(rootElement);
console.log("Root created, attempting to render...");

root.render(
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>
);
