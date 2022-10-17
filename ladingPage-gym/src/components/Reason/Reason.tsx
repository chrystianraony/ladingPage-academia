import React from "react";
import "./Reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reason = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Algumas razões</span>
        <div>
          <span className="stroke-text">Por quê </span>
          <span>nos escolher?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>MAIS DE 140 TREINADORES ESPECIALISTAS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TREINE MAIS INTELIGENTE E RÁPIDO DO QUE ANTES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 PROGRAMA GRATUITO PARA NOVOS MEMBROS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>PARCEIROS CONFIÁVEIS</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          Nossos Parceiros
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reason;
