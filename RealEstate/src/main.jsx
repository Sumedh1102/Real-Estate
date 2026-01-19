import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import PropertyDetails from "./Pages/PropertyDetails.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import AllProperties from "./Pages/AllProperties.jsx";
import Demo from "./Pages/Demo.jsx";
import { PropertyProvider } from "./Context/PropertyContext.jsx";

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
      },
      {
        path: "admin",
        element: <AdminDashboard />
      },
      {
        path: "properties",
        element: <AllProperties />
      }
    ]
  },

  // 👇 Individual / standalone page
  {
    path: "/demo",
    element: <Demo />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PropertyProvider>
      <RouterProvider router={router} />
    </PropertyProvider>
  </StrictMode>
);
