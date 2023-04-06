import React, { ComponentElement } from "react";

// eslint-disable-next-line react/prop-types
const HomeLayout = ({ children } : {childern: React.ReactNode}) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};