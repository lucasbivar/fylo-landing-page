import React from "react";
import moonIcon from "../assets/images/moon.svg";
import sunIcon from "../assets/images/sun.svg";
import { THEMES } from '../constants/theme';


export default function Button(props){
  if(props.theme === THEMES.light){
    return(<button onClick={props.setTheme} className="btn"><img className="btn-theme" src={moonIcon} alt="active dark theme"/></button>);
  }
  return(<button onClick={props.setTheme} className="btn"><img className="btn-theme" src={sunIcon} alt="active light theme" /> </button>);
}