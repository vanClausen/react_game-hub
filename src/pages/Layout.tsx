import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Analytics />
    </>
  );
};

export default Layout;
