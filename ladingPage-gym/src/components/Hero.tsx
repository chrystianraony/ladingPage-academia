import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image from"../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png"
import calories from "../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
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
        {/* figuras de ilustrações*/}
        <div className="figures">
          <div>
            <span>+50 </span>
            <span>TREINADORES</span>
          </div>
          <div>
            <span>+200 </span>
            <span>MEMBROS INSCRITOS</span>
          </div>
          <div>
            <span>+20 </span>
            <span>PROGRAMAS </span>
          </div>
        </div>
        {/* criando os buttons */}
        <div className="buttons">
          <button className="btn">Iniciar</button>
          <button className="btn">Saiba mais</button>

        </div>
      </div>
      <div className="right-hero">
        <button className="btn">ENTRAR</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Frequência cardíaca </span>
          <span>116 Bpm</span>
        </div>
        {/* imagens */}
        <img src={hero_image} alt="" className="hero-image"/>
        <img src={hero_image_back} alt="" className="hero-image-back" />
        {/* îmagen calorias */}
        <div className="calories">
          <img src={calories} alt=""/>
          <div>
            <span>Queima Calórica </span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
