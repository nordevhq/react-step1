import React from "react";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Error from "../pages/error/Error.jsx";

export const routeConstant = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "*",
    element: <Error />,
  },
];
