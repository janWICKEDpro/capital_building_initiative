/** @format */

import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import "./introSection.scss";

import Services from "../../components/services/Services";
import BusinessInfo from "../../components/businessInfo/BusinessInfo";
import Contact from "../../components/contact/Contact";
import Testimonials from "../../components/testimonials/Testimonials";
import About from "../../components/about/About";

export default function IntroSection() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Accountable",
        "Valuable ",
        "Accessible",
        "knowledgable",
        "connected",
      ],
    });
  }, []);

  return (
    <div>
      <div className="intro" id="intro">
        <img className="cover" src="assets/cover.jpg" alt="cover" />

        <div className="welcome">
          <br />
          <h1 className="comp">Capital Building Initiative</h1>
          <hr />
          <h2>
            {" "}
            We are <span ref={textRef}></span>
          </h2>
        </div>
      </div>
      <About />
      <Services />
      <BusinessInfo />
      <Contact />
      <Testimonials />
    </div>
  );
}
