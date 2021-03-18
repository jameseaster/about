// React Imports
import React from "react";

// Type Imports
import { IconProps } from "./types";

/**
 * Icon
 *
 * Icon is a reusable component that takes in a url, image, and style
 * and generates a clickable icon. These are utilized at the top left
 * of the Navbar
 */
export const Icon: React.FC<IconProps> = ({ url, img, style }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={img} alt="icon" style={style} />
    </a>
  );
};
