import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./index.css";
import CreateTemplate from "./Pages/CreateTemplate";

const router = createBrowserRouter([
  {
    path: "home",
    Component: Home,
  },
  {
    path: "/about",
   Component: About,
  },
  {path : "/CreateTemplate",
  Component : CreateTemplate,}
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
