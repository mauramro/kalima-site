import React, { Fragment } from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <main className="container mx-auto">{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
