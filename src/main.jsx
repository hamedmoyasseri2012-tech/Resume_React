import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/",
   Component: About,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
