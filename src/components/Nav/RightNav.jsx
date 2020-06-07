import React from 'react'
import styled from 'styled-components';
import { Link } from "react-scroll";

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
  .active {
    border-bottom: 1px solid #fff;
  }
`
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        >Home</Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        >About</Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="applications"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        >Applications</Link>
      </li>
      <li>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        >Contact</Link>
      </li>
      <li>
        Resume
      </li>
    </Ul>
  )
}

export default RightNav
