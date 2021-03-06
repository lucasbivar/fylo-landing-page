import React from "react";
import '../styles/global.css';

export default function Card(props){
  return(
    <div id="card">
      <p>{props.text}</p>
      <div className="user-info">
        <img className="profile-pic" src={props.image} alt="profile-pic" />
        <div className="about-user">
          <strong>{props.name}</strong>
          <span>{props.role}</span>
        </div>
      </div>
    </div>
  );
}