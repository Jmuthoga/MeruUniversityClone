import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Program from "./Programs/Program";
import Title from "./Title/Title";
import About from "./About/About";
import Universtity from "./University/Universtity";
import Testimonials from "./Testimonials/Testimonials";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import VideoPlayer from "./VideoPlayer/VideoPlayer";

const App = () => {
  const [playState, SetPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="What We Offer" />
        <Program />
        <About SetPlayState={SetPlayState} />
        <Title subtitle="Gallery" title="Campus photos" />
        <Universtity />
        <Title subtitle="TESTIMONIALS" title="What student Says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} SetPlayState={SetPlayState} />
    </div>
  );
};

export default App;
