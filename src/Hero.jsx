import React, { useState } from "react";
import heroImg from "./assets/hero.svg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>contentful starter</h1>
          <p>
            Bushwick PBR&B keffiyeh scenester letterpress. Bodega boys grailed
            lo-fi keffiyeh enamel pin iPhone. Pour-over chia literally forage
            bespoke snackwave keffiyeh cliche blackbird spyplane palo santo
            waistcoat Brooklyn retro. Pug cred retro keffiyeh.
          </p>
        </div>
        <div className="image-container">
          <img src={heroImg} alt="hero" className="img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
