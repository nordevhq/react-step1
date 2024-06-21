import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routeConstant } from "./assets/constants/routeConstant"; // Adjusted import for named export

function App() {
  console.log(routeConstant);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routeConstant.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
