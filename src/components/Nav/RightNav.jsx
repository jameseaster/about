import React from 'react'
import styled from 'styled-components';
import { Link } from "react-scroll";

import PDF from '../../images/Resume.pdf'

const Ul = styled.ul`
  flex-flow: column nowrap;
  background-color: #0D2538;
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
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
    border: 1px solid #fff;
    padding: 4px;
    border-radius: 2px;
  }
`
const RightNav = ({ open, closeDrawer }) => {
  return (
    <Ul open={open}>
      <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeDrawer}
        >Home</Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeDrawer}
        >About</Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="applications"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeDrawer}
        >Applications</Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeDrawer}
        >Contact</Link>
      </li>
      <li>
        <a href = {PDF} target = "_blank" className="resume" rel="noopener noreferrer">Resume</a>
      </li>
    </Ul>
  )
}

export default RightNav
