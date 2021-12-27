import React, { Fragment } from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
        <main className="container mx-auto">{props.children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
