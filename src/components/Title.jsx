import React from "react";
import illustrationIntro from "../assets/images/illustration-intro.png";

export default function Title(){
  return(
    <section id="title">
      <div className="container-fluid">
          <img src={illustrationIntro} alt="illustration-intro" />

          <h1>All your files in one secure location, accessible anywhere.</h1>

          <p>Fylo stores all your most important files in one secure location. Access them wherever 
          you need, share and collaborate with friends family, and co-workers.</p>

          <button type="button">Get Started</button>
      </div>
    </section>
  );
}