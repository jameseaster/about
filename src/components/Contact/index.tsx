// React Imports
import React from "react";

// Style Imports
import { ContactStyle } from "./styles";

/**
 * Contact
 *
 * Contact information generated at the bottom of the webpage
 */
export const Contact: React.FC<{}> = () => (
  <ContactStyle id="Contact">
    <div className="container">
      <h3 className="header">CONTACT</h3>
      <div className="body-container">
        <div className="app-text">
          <p style={{ marginBottom: "20px" }}>
            I would love to hear from you, send me an email & stay in touch!
          </p>
          <h4>james.m.easter@gmail.com</h4>
        </div>
      </div>
    </div>
  </ContactStyle>
);
