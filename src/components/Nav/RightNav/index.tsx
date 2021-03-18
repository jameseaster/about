// React Imports
import React from "react";

// Style Imports
import { UlStyle } from "./styles";

// Type Imports
import { RightNavProps } from "./types";

// Components
import { RightNavLink } from "../RightNavLink";

// Image Imports
import pdf from "../../../assets/other/Resume.pdf";

/**
 * RightNav
 *
 * This is the drawer/bar that pops out from the right side of the view
 * when the Burger component is clicked on. RightNav contains RightNavLink
 * components that will direct the user to a specific destination of the
 * webpage
 */
export const RightNav: React.FC<RightNavProps> = ({ open, closeDrawer }) => (
  <UlStyle open={open}>
    <RightNavLink close={closeDrawer} title={"Home"} />
    <RightNavLink close={closeDrawer} title={"About"} />
    <RightNavLink close={closeDrawer} title={"Projects"} />
    <RightNavLink close={closeDrawer} title={"Contact"} />
    <RightNavLink pdf={pdf} title={"Resume"} />
  </UlStyle>
);
