/* eslint-disable no-unused-vars */
import React from "react";
import About from "../../../pages/About/About";
import Home from "../../../pages/Home/Home";
import MuiPage from "../../../pages/MuiPage/MuiPage";

const routes = [
  { name: "Home", path: "/home", element: <Home />, key: "home" },
  { name: "Mui", path: "/mui", element: <MuiPage />, key: "mui" },
  { name: "About", path: "/about", element: <About />, key: "about" },
];
export default routes;
