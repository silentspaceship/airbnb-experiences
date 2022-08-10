import React from "react";
import HeroImg from "../assets/hero_img.png";

export default function Hero() {
  return (
    <section className="hero-container">
      <img
        className="hero-photo"
        src={HeroImg}
        alt="A variety of places and activities."
      />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
