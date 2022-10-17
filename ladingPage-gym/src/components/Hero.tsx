import React from "react";
import Header from "./Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <Header />
        {/* anuncio da melhor academia */}
        <div className="the-best-ad">
          <div></div>
          <span>A melhor academia da cidade</span>
        </div>
        {/* título principal */}
        <div className="hero-text">
          <div>
            <span>Para modelar </span>
          </div>
          <div>
            <span>seu </span>
            <span className="stroke-text">SHAPE </span>
          </div>
          <div>
            <span>
              Aqui vamos ajudá-lo a moldar e construir seu corpo ideal
            </span>
          </div>
        </div>
      </div>
      <div className="right-hero">right</div>
    </div>
  );
};

export default Hero;
