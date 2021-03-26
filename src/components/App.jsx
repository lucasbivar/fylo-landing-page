import '../styles/global.css'
import React from "react";
import Nav from "./Nav";
import Title from "./Title";
import Features from "./Features";
import About from './About';

export default function App() {
  return (
      <div>
        <Nav />
        <Title />
        <Features />
        <About />
      </div>
  );
}