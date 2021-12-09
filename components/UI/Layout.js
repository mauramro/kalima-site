import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = (props) => {
  return (
    <div className="container mx-auto">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
