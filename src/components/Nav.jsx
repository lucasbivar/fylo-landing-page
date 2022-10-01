import React from "react";
import fyloLogo from '../assets/images/logo.svg';
import fyloLogoLight from "../assets/images/logo_light.svg";
import { THEMES } from '../constants/theme';

export default function Nav(props){
  let logo;
  if(props.theme === THEMES.light){
    logo = fyloLogoLight;
  }else{
    logo = fyloLogo;
  }
  return (
    <div className="container-fluid">
      <ul id="nav-bar">
        <li><img src={logo} alt="fylo-logo" /></li> 
        <li><a href="/#">Features</a></li>
        <li><a href="/#">Team</a></li>
        <li><a href="/#">Sign In</a></li>
      </ul>
    </div>
  );

}