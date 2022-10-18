import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";

const Join = () => {
  // const form = useRef();
  // const templateParams = {
  //   name: "James",
  //   notes: "Check this out!",
  // };

  // emailjs
  //   .send(
  //     "<YOUR_SERVICE_ID>",
  //     "<YOUR_TEMPLATE_ID>",
  //     templateParams,
  //     "<YOUR_PUBLIC_KEY>"
  //   )
  //   .then(
  //     (response) => {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     (err) => {
  //       console.log("FAILED...", err);
  //     }
  //   );

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">PRONTO PARA </span>
          <span>EVOLUIR</span>
        </div>
        <div>
          <span>SEU CORPO </span>
          <span className="stroke-text">CONOSCO?</span>
        </div>
      </div>
      <div className="right-j">
        <form  className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Insira o seu Email"
          />
          <button className="btn btn-j">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
