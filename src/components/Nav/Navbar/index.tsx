// React Imports
import React from "react";

// Style Imports
import { NavbarStyle } from "./styles";

// Components
import { Icon } from "../Icon";
import { Burger } from "../Burger";

// Data
import { iconData } from "../../../data/IconData";

/**
 * Navbar
 *
 * This component is fixed to the top of the view at all times. It contains
 * the list of icons on the top left as well as the Burger component which
 * acts as a button for the navigational features in the side bar on the right
 */
export const Navbar: React.FC<{}> = () => (
  <NavbarStyle>
    <div className="icon-container">
      {iconData.map((icon) => (
        <Icon url={icon.url} img={icon.img} style={icon.style} />
      ))}
    </div>
    <Burger />
  </NavbarStyle>
);
