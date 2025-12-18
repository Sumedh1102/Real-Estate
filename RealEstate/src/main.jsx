import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import PropertyDetails from "./Pages/PropertyDetails.jsx";
import Demo from "./Pages/Demo.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout route (Navbar + Footer)
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "property/:id",
        element: <PropertyDetails />
      }
    ]
  },

  // 👇 Individual / standalone page
  {
    path: "/demo",
    element: <Demo />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
