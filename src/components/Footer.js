import React from "react";
import { StyledFooter } from "./Footer.styles";

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        Contact us at{" "}
        <a href="mailto:info@weathersconcrete.com">
          info@weathersconcrete.com
        </a>
      </p>
      <p>
        Matthew Weathers
      </p>
      <p>Operating out of Panama City, Florida</p>
      <p>&copy; {new Date().getFullYear()} Weathers Concrete</p>
    </StyledFooter>
  );
}