import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-hero">
        <Header />
        {/* anuncio da melhor academia */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile? "165px": "238px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>+
              <CountUp delay={2} end={50} />
            </span>
            <span>TREINADORES</span>
          </div>
          <div>
            <span>+
              <CountUp delay={2} end={200} />
            </span>
            <span>MEMBROS INSCRITOS</span>
          </div>
          <div>
            <span>+
              <CountUp delay={2} end={25}/>
            </span>
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
        {/* adicionado motion */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Frequência cardíaca </span>
          <span>116 Bpm</span>
        </motion.div>
        {/* imagens */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{ right: "24rem" }}
        transition={transition}
        src={hero_image_back} alt="" className="hero-image-back" />
        {/* îmagen calorias */}
        <motion.div
          initial={{ right: "40rem" }}
          whileInView={{ right: "31rem" }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Queima Calórica </span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
