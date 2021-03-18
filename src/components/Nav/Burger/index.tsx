// React Imports
import React, { useState } from "react";

// Style Imports
import { StyledBurger } from "./styles";

// Components
import { RightNav } from "../RightNav";

/**
 * Burger
 *
 * The Burger is a button that is at the top right of the
 * webpage and opens up the side navigation bar
 */
export const Burger: React.FC<{}> = () => {
  // Local State
  const [open, setOpen] = useState<boolean>(false);

  // Event Handlers & Functions
  const handleClick = () => setOpen(!open);
  const closeDrawer = () => setTimeout(() => setOpen(false), 650);

  return (
    <>
      <StyledBurger open={open} onClick={handleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} closeDrawer={closeDrawer} />
    </>
  );
};
