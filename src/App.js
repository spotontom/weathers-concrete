import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

// Import your background image
import bgImage from "./imgs/aaron-burden-t2b1Z-jPT-w-unsplash.jpg";
import styled from "styled-components";

const BgWrapper = styled.div`
   background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
    url(${bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export default function App() {
  return (
    <BgWrapper>
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </BgWrapper>
  );
}
