import React from "react";
import fyloLogo from '../assets/images/logo.svg';

export default function Nav(){
  return (
    <div className="container-fluid">
      <ul id="nav-bar">
        <li><img src={fyloLogo} alt="fylo-logo" /></li> 
        <li><a href="/#">Features</a></li>
        <li><a href="/#">Team</a></li>
        <li><a href="/#">Sign In</a></li>
      </ul>
    </div>
  );

}