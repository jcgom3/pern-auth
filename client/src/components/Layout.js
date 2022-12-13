import NavBar from "./NavBar";
import React, { children } from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
