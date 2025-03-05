import Nav from "./Nav";
import React from "react";
import { Outlet } from "react-router-dom"; 
import PageTitle from "./PageTitle";

const Layout = () => {
  return (
    <div>
        <PageTitle />
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
