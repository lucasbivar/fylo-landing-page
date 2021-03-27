import React from "react";
import Grid from '@material-ui/core/Grid';
import iconAccessAnywhere from "../assets/images/icon-access-anywhere.png";
import iconSecurity from "../assets/images/icon-security.svg";
import iconCollaboration from "../assets/images/icon-collaboration.svg";
import iconAnyFile from "../assets/images/icon-any-file.svg";
import '../styles/global.css'


export default function Features(){
  return(
    <section id="features">
      <div className="container-fluid">
        <Grid container spacing={3}>

          <Grid className="grid-item" item md={6} sm={12} xs={12}>
            <img src={iconAccessAnywhere}  alt="" />
            <h3>Access your files, anywhere</h3>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your 
               files follow you everywhere.</p>
          </Grid>

          <Grid className="grid-item" item md={6} sm={12} xs={12}>
            <img src={iconSecurity}  alt="" />
            <h3>Security you can trust</h3>
            <p>2-factor authentication and user-controlled encryption are just a couple of the security 
               features we allow to help secure your files.</p>
          </Grid>

          <Grid className="grid-item" item md={6} sm={12} xs={12}>
            <img src={iconCollaboration}  alt="" />
            <h3>Real-time collaboration</h3>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. 
               No email attachments required.</p>
          </Grid>

          <Grid className="grid-item" item md={6} sm={12} xs={12}>
            <img src={iconAnyFile} alt="" />
            <h3>Store any type of file</h3>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
               file types to be securely stored and shared.</p>
          </Grid>

        </Grid>
      </div>
    </section>

    
  );
}