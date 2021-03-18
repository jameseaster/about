// React Imports
import React from "react";

// Dependency Imports
import { Link } from "react-scroll";

// Type Imports
import { RightNavLinkProps } from "./types";

/**
 * RightNavLink
 *
 * These links are components that are imported from 'react-scroll' that allow
 * the user to click on a link and be scrolled to a specific area of the webpage.
 * This creates allows the webpage to be a one page slider app that reacts to
 * these navigation links which are rendered in the RightNav component
 */
export const RightNavLink: React.FC<RightNavLinkProps> = ({
  pdf,
  title,
  close,
}) => {
  return (
    <li>
      {pdf ? (
        <a
          href={pdf}
          target="_blank"
          className="resume"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      ) : (
        <Link
          activeClass="active"
          to={title}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={close}
        >
          {title}
        </Link>
      )}
    </li>
  );
};
