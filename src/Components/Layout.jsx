import Nav from "./Nav";
import React from "react";
import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main id="ressurser">
        <section id="resource-list">
          <Outlet /> 
        </section>
      </main>
    </div>
  );
};

export default Layout;
