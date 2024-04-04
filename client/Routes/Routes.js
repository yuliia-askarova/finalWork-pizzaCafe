import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App.jsx";
import Header from "../components/Header/Header.jsx";
import Menu from "../components/Menu/Menu.jsx";
import About from "../components/About/About.jsx";
import React from "react";
import Pizzas from "../components/Menu/Pizzas.jsx";
import Drinks from "../components/Menu/Drinks.jsx";

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />

        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <App /> },
      {
        path: "/menu",
        element: <Menu />,
        children: [
          { path: "pizzas", element: <Pizzas /> },
          { path: "drinks", element: <Drinks /> },
        ],
      },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
