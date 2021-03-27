import '../styles/global.css'
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Title from "./Title";
import Features from "./Features";
import About from './About';
import Testemonials from './Testemonials';
import Footer from "./Footer";
import Button from "./Button";
import bgDark from "../assets/images/bg-curvy-desktop.svg";
import bgLight from "../assets/images/bg-curvy-desktop_light.svg";


function setDarkTheme(){
  document.documentElement.style.setProperty('--textColor',"#FFFFFF");
  document.documentElement.style.setProperty('--mainBackground',"hsl(217, 28%, 15%)");
  document.documentElement.style.setProperty('--featuresBackground',"hsl(218, 28%, 13%)");
  document.documentElement.style.setProperty('--testemonialsBackground',"hsl(218, 28%, 13%)");
  document.documentElement.style.setProperty('--aboutBackground',"hsl(218, 28%, 13%)");
  document.documentElement.style.setProperty('--cardBackground',"hsl(219, 30%, 18%)");
  document.documentElement.style.setProperty('--footerBackground',"hsl(216, 53%, 9%)");    
  document.documentElement.style.setProperty('--btn-theme',"#fdfdfd");
  document.documentElement.style.setProperty('--testemonialsHole',"#BABABA");
  document.getElementById("title").style.backgroundImage = "url("+ bgDark+")";
}

function setLightTheme(){
  document.documentElement.style.setProperty('--textColor',"hsl(218, 28%, 13%)");
  document.documentElement.style.setProperty('--mainBackground',"#EBEEF0");
  document.documentElement.style.setProperty('--featuresBackground',"#FFFFFF");
  document.documentElement.style.setProperty('--testemonialsBackground',"#FFFFFF");
  document.documentElement.style.setProperty('--aboutBackground',"#FFFFFF");
  document.documentElement.style.setProperty('--cardBackground',"#EFF1F2");    
  document.documentElement.style.setProperty('--footerBackground',"#EBEEF0");    
  document.documentElement.style.setProperty('--btn-theme',"hsl(217, 28%, 15%)");  
  document.documentElement.style.setProperty('--testemonialsHole',"#000000");
  document.getElementById("title").style.backgroundImage = "url("+ bgLight+")";
}


export default function App() {

  let persistedValue = localStorage.getItem("theme");
  if(persistedValue === null){
    persistedValue = "dark"
    localStorage.setItem("theme", persistedValue);
  }
  const [theme, setTheme] = useState(persistedValue);

  useEffect(()=>{
    if(theme === "dark"){
      setDarkTheme();
    }else{
      setLightTheme();
    }
  },[theme]);

  function changeTheme(){
    if(theme === "dark"){
      setTheme("light");  
      localStorage.setItem("theme", "light");
    }else{
      setTheme("dark"); 
      localStorage.setItem("theme", "dark");
    }
  }

  return (
      <div>
        <Nav theme={theme}/>
        <Title />
        <Features />
        <About />
        <Testemonials />
        <Button theme={theme} setTheme={changeTheme}/>
        <Footer theme={theme} />
      </div>
  );
}