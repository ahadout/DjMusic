import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Screenshots_Section_1 from "./Screenshots_Section_1";
import Screenshots_Section_2 from "./Screenshots_Section_2";
import Screenshots_Section_3 from "./Screenshots_Section_3";

function Screenshots() {
  return (
    <>
      <Header />
      <Screenshots_Section_1 />
      <Screenshots_Section_2 />
      <Screenshots_Section_3 />
      <Footer />
    </>
  );
}

export default Screenshots;
