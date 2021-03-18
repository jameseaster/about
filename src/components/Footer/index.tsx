// React Imports
import React from "react";

// Style Imports
import { FooterStyle } from "./styles";

/**
 * Footer
 *
 * Footer rendered at the bottom of the webpage displaying
 * build & design credits
 */
export const Footer: React.FC<{}> = () => {
  return (
    <FooterStyle>
      <p>built & designed by James Easter</p>
    </FooterStyle>
  );
};
