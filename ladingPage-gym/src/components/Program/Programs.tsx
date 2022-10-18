import React from "react";
import programs from "../../data/programs";
import "./Programs.css";
import RightArrow from "../../assets/rightArrow.png"


const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header programs */}
      <div className="programs-header">
        <span className="stroke-text">EXPLORE NOSSOS </span>
        <span>PROGRAMAS </span>
        <span className="stroke-text">PARA MOLDAR VOCÊ</span>
      </div>

      <div className="program-categories">
        {programs.map((program)=>(
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Entrar </span>
              <span><img src={RightArrow} alt="" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
