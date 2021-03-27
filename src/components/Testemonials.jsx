import React from "react";
import '../styles/global.css';
import Grid from '@material-ui/core/Grid';
import Card from "./Card";
import satishPicture from "../assets/images/profile-1.jpg";
import brucePicture from "../assets/images/profile-2.jpg";
import ivaPicture from "../assets/images/profile-3.jpg";
import quotesIcon from "../assets/images/bg-quotes.png";


export default function Testemonials(){
  return(
    <section id="testemonials">
      <div className="container-fluid">
        <Grid container spacing={3}>
          <img className="quotes-icon" src={quotesIcon} alt="quotes-icon" />
          <Grid className="grid-quotes" item md={4} sm={6} xs={12}>
            <Card 
            text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                  become a well-oiled collaboration machine."
            name="Satish Patel"
            image={satishPicture}
            role="Founder & CEO, Huddle"
            />
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Card 
              text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine."
              name="Bruce McKenzie"
              image={brucePicture}
              role="Founder & CEO, Huddle"
              />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
          <Card 
              text="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                    become a well-oiled collaboration machine."
              name="Iva Boyd"
              image={ivaPicture}
              role="Founder & CEO, Huddle"
              />
          </Grid>
        </Grid>
      </div>
    </section>
  );

}