import React from "react";
import "../styles/global.css";
import Grid from "@material-ui/core/Grid";
import fyloLogo from "../assets/images/logo.svg";
import fyloLogoLight from "../assets/images/logo_light.svg";
import phoneIcon from "../assets/images/icon-phone.svg";
import emailIcon from "../assets/images/icon-email.svg";
import facebookIcon from "../assets/images/facebook.svg";
import instagramIcon from "../assets/images/instagram.svg";
import twitterIcon from "../assets/images/twitter.svg";
import Newsletter from './Newsletter';


export default function Footer(props) {
  let logo;
  if(props.theme){
    logo = fyloLogoLight;
  }else{
    logo = fyloLogo;
  }
  return (
    <footer>
      <Newsletter />
      <div className="container-fluid">
        <div className="footer-logo">
          <img src={logo} alt="fylo-logo" />
        </div>
        <Grid container spacing={3}>
          <Grid item md={4} sm={12} xs={12}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.816076227418!2d-35.882279753828435!3d-7.226734232472486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e50873c3cd5%3A0x363a371535b8eb22!2sA%C3%A7ude%20Velho!5e0!3m2!1spt-BR!2sbr!4v1616795262439!5m2!1spt-BR!2sbr"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Grid>
          <Grid item md={2} sm={12} xs={12}>
            <ul className="footer">
              <li><img src={phoneIcon} alt="phone-icon" /> +55 (83) 99999-9999</li>
              <li><img src={emailIcon} alt="email-icon" /> example@fylo.com</li>
            </ul>
          </Grid>
          <Grid item md={2} sm={12} xs={12}>
            <ul className="footer">
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Blog</li>
            </ul>
          </Grid>
          <Grid item md={2} sm={12} xs={12}>
            <ul className="footer">
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </Grid>
          <Grid item md={2} sm={12} xs={12}>
            <ul id="social-medias">
              <li><img src={facebookIcon} alt="facebook logo" /> Facebook</li>
              <li><img src={instagramIcon} alt="instagram logo" /> Instagram</li>
              <li><img src={twitterIcon} alt="twitter logo" /> Twitter</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}
