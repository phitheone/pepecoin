import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About1 from "../components/About1";
import About2 from "../components/About2";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <About2 />
      <About1 />
      <Hero />
      {/* <FAQ /> */}
      <Footer />
    </div>
  );
};

export default Home;
