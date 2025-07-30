import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  //children is a prop so that the element which are wrap inside the layout their content get visible
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </Helmet>

      <Header />
      <main style={{ minHeight: "80vh", background: "#7f818040" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Ecommerce App",
  description: "mern projrct",
  keywords: "mern,react,mongodb",
  author: "Samar",
};

export default Layout;
