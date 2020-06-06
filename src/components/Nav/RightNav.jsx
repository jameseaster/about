import React from 'react'
import styled from 'styled-components';

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
    padding: 18px 10px;
  }
`
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>About</li>
      <li>Applications</li>
      <li>Contact</li>
      <li>Resume</li>
    </Ul>
  )
}

export default RightNav
