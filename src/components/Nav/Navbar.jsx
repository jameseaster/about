import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';

import dev from '../../icons/dev.png';
import codewars from '../../icons/codewars.png';
import github from '../../icons/github.png';
import linkedin from '../../icons/linkedin.png';

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
      <div className="logo" style={{}}>
        <img src={dev} alt="dev" style={{height: '35px', marginRight: '15px'}}/>
        <img src={codewars} alt="codewars" style={{height: '34px', marginRight: '15px', padding: 3, backgroundColor: '#A8332A', borderRadius: '5px'}}/>
        <img src={linkedin} alt="linkedin" style={{height: '34px', marginRight: '15px'}}/>
        <img src={github} alt="github" style={{height: '39px', marginRight: '15px', paddingTop: '3px'}}/>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
