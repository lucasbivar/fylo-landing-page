import React from "react";
import Grid from "@material-ui/core/Grid";
import '../styles/global.css'
import illustrationStayProductive from "../assets/images/illustration-stay-productive.png";
import arrowIcon from "../assets/images/icon-arrow.svg"

export default function About(){
  return(
    <section id="about">
      <div class="container-fluid">
        <Grid container spacing={5}>
          <Grid item md={6} sm={12} xs={12}>
            <img className="illustration-about" src={illustrationStayProductive} alt="illustration stay productive" />
          </Grid>
          <Grid className="grid-item" item md={6} sm={12} xs={12}>
            <h2>Stay productive, wherever you are</h2>
            <br />
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
                storage needs.</p>
            <br />
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
                attachments required.</p>
            <br />
            <a className="cta" href="/#">See how Fylo works <img className="cta-btn" src={arrowIcon} alt="arrow icon" /></a>
          </Grid>
        </Grid>
      </div>
    </section>
  )
}