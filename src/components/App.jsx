import '../styles/global.css'
import React, { useState } from "react";
import Nav from "./Nav";
import Title from "./Title";
import Features from "./Features";
import About from './About';
import Testemonials from './Testemonials';
import Footer from "./Footer";
import Button from "./Button";

export default function App() {

  const [light, setLight] = useState(false);

  function setTheme(){
    setLight(!light);
    if(light){
      document.documentElement.style.setProperty('--textColor',"#FFFFFF");
      document.documentElement.style.setProperty('--mainBackground',"hsl(217, 28%, 15%)");
      document.documentElement.style.setProperty('--featuresBackground',"hsl(218, 28%, 13%)");
      document.documentElement.style.setProperty('--testemonialsBackground',"hsl(218, 28%, 13%)");
      document.documentElement.style.setProperty('--aboutBackground',"hsl(218, 28%, 13%)");
      document.documentElement.style.setProperty('--gradient','url("../assets/images/bg-curvy-desktop.svg")');

    }else{
      document.documentElement.style.setProperty('--textColor',"#000000");
      document.documentElement.style.setProperty('--mainBackground',"#cecece");
      document.documentElement.style.setProperty('--featuresBackground',"#FFFFFF");
      document.documentElement.style.setProperty('--testemonialsBackground',"#FFFFFF");
      document.documentElement.style.setProperty('--aboutBackground',"#FFFFFF");
      document.documentElement.style.setProperty('--gradient','url("../assets/images/bg-curvy-desktop_light.svg")');

    }
  }

  return (
      <div>
        <Nav theme={light}/>
        <Title />
        <Features />
        <About />
        <Testemonials />
        <Button theme={light} setTheme={setTheme}/>
        <Footer theme={light} />
      </div>
  );
}