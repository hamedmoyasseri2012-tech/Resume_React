import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "./Pages/About";
import "./index.css";
import App from "./App";
import TemplatePage from "./Pages/TemplatePage";
import CreateTemplate from "./Pages/CreateTemplate"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/template-page",
    Component: TemplatePage,
  },
  {
    path: "/create-template",
    Component: CreateTemplate,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
