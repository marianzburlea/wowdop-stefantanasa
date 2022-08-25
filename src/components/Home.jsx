import React, { useState } from "react";
import { Carousel } from "./Carousel";
import Header from "./Header";
import Navbar from "./Navbar";
import How from "./How";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import { Options } from "./Options";

export const Home = ({ profile, setProfile }) => {
  return (
    <main>
      <Navbar />
      <Header />
      <Carousel setProfile={setProfile} />
      <AboutUs />
      <WhyUs />
      <How />
      <Options />
    </main>
  );
};
