import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Homepage";
import NotFoundPage from "./NotFoundPage";
import NavBar from "./components/Navbar/NavBar";
import About from "./components/Navbar/About/About";
import Products from "./components/Navbar/Products/Products";
import Contact from "./components/Navbar/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/navbar",
    element: <NavBar />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
