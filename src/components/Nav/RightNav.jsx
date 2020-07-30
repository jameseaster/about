import React from "react";
import styled from "styled-components";

import RightNavLink from "./RightNavLink";
import pdf from "../../images/Resume.pdf";

const Ul = styled.ul`
  flex-flow: column nowrap;
  background-color: #0d2538;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.4s ease-in-out;
  list-style-type: none;

  li {
    color: #fff;
    padding: 18px 30px;
  }

  .resume {
    color: #fff;
    text-decoration: none;
  }

  .active {
    border: 1px solid #f7882f;
    padding: 4px;
    border-radius: 2px;
  }
`;

const RightNav = ({ open, closeDrawer }) => (
  <Ul open={open}>
    <RightNavLink close={closeDrawer} title={"Home"} />
    <RightNavLink close={closeDrawer} title={"About"} />
    <RightNavLink close={closeDrawer} title={"Projects"} />
    <RightNavLink close={closeDrawer} title={"Contact"} />
    <RightNavLink pdf={pdf} title={"Resume"} />
  </Ul>
);

export default RightNav;
