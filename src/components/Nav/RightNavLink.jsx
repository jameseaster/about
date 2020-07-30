import React from "react";
import { Link } from "react-scroll";

const RightNavLink = ({ title, close, pdf }) => {
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

export default RightNavLink;
