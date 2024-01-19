import React from "react";
import Hero from "../components/Feature/Hero";
import { Features } from "../components/Feature/Features";
import Subscribe from "../components/Feature/Subscribe";
import Accessible from "../components/Feature/Accessible";

const Feature = () => {
  return (
    <main>
      <Hero />
      <Accessible />
      <Features />
      <Subscribe />
    </main>
  );
};

export default Feature;
