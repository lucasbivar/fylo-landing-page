import React from "react";
import "../styles/global.css";
import Grid from "@material-ui/core/Grid";
import fyloLogo from "../assets/images/logo.svg";
import fyloLogoLight from "../assets/images/logo_light.svg";
import phoneIconDark from "../assets/images/icon-phone.svg";
import phoneIconLight from "../assets/images/icon-phone_light.svg";
import emailIconDark from "../assets/images/icon-email.svg";
import emailIconLight from "../assets/images/icon-email_light.svg";
import facebookIconLight from "../assets/images/facebook_light.svg";
import facebookIconDark from "../assets/images/facebook.svg";
import instagramIconDark from "../assets/images/instagram.svg";
import instagramIconLight from "../assets/images/instagram_light.svg";
import twitterIconDark from "../assets/images/twitter.svg";
import twitterIconLight from "../assets/images/twitter_light.svg";
import Newsletter from './Newsletter';


export default function Footer(props) {
  let logo, facebook, instagram, twitter, phone, email;
  if(props.theme === "light"){
    logo = fyloLogoLight;
    facebook = facebookIconLight;
    instagram = instagramIconLight;
    twitter = twitterIconLight;
    email = emailIconLight;
    phone = phoneIconLight;
  }else{
    logo = fyloLogo;
    facebook = facebookIconDark;
    instagram = instagramIconDark;
    twitter = twitterIconDark;
    email = emailIconDark;
    phone = phoneIconDark;
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
              <li><img src={phone} alt="phone-icon" /> +55 (83) 99999-9999</li>
              <li><img src={email} alt="email-icon" /> example@fylo.com</li>
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
              <li><img src={facebook} alt="facebook logo" /> Facebook</li>
              <li><img src={instagram} alt="instagram logo" /> Instagram</li>
              <li><img src={twitter} alt="twitter logo" /> Twitter</li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}
