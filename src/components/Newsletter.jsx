import React from "react";
import '../styles/global.css'

export default function Newsletter(){
  return(
    <div id="newsletter">
      <h2>Get early access today</h2>
      <p>It only takes a minute to sign up and 
      our free starter tier is extremely generous. If you have any questions, 
      our support team would be happy to help you.</p>
      <form>
        <label for="email"></label>
        <input placeholder="email@example.com" type="email" id="email" name="email" />
        <button type="submit">Get Started For Free</button>
      </form>
    </div>);
}