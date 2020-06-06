import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    padding: 15px 0;
  }

  /* this might be good to use for the icons */
  /* list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  } */
`
const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Add social media icons here...
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
