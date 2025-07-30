import React from "react";
import { StyledHero, HeroContent } from "./Hero.styles";

export default function Hero() {
  return (
    <StyledHero>
      <HeroContent>
        <h1>Quality Concrete Work</h1>
        <p>
          Serving Bay County and the Gulf Coast with exceptional concrete services — patios, driveways, slabs, and more.
        </p>
        <a href="spotontom1@gmail.com" className="quote-btn">
          Get a Free Quote
        </a>
      </HeroContent>
    </StyledHero>
  );
}