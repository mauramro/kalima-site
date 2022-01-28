import React, { Fragment } from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="bg-gradient-to-r from-black-900 via-black-700 to-black-900">
        <main className="container mx-auto">{props.children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
