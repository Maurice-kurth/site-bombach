import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import PageTitle from "../PageTitle";
import Prefooter from "../Prefooter";

function WIP() {
  return (
    <div>
      <Navbar />
      <PageTitle title="Page en construction" />
      <h1 style={{ marginTop: "10rem", textAlign: "center" }}>
        Page en construction, merci de réessayer plus tard
      </h1>
      <Prefooter />
      <Footer />
    </div>
  );
}

export default WIP;
