import React, { Fragment } from "react";
import Footer from "../Global/Footer";
import Header from "../Global/Header";

const Layout = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="bg-black">
        <main className="container mx-auto">{props.children}</main>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
