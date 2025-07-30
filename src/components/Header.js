import React from "react";
import { StyledHeader } from "./Header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <div className="content">
        <div className="logo">🧱</div>
        <div className="text">
          <h1>Weathers Concrete</h1>
          <p>Reliable Residential & Commercial Concrete</p>
        </div>
      </div>
    </StyledHeader>
  );
}