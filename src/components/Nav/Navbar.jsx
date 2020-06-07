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

  .icon-container {
    padding: 15px 0;
  }

  img: hover {
    transform: scale(1.1, 1.1);
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
      <div className="icon-container">
        <a href="https://dev.to/jameseaster" target="_blank" rel="noopener noreferrer">
          <img src={dev} alt="dev" style={{height: '38px', marginRight: '15px'}}/>
        </a>
        <a href="https://www.codewars.com/users/jameseaster" target="_blank" rel="noopener noreferrer">
          <img src={codewars} alt="codewars" style={{height: '34px', marginRight: '15px', marginBottom: '2px', padding: 3, backgroundColor: '#A8332A', borderRadius: '5px'}}/>
        </a>
        <a href="https://www.linkedin.com/in/jameseaster-dev/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" style={{height: '34px', marginRight: '15px', marginBottom: '2px'}}/>
        </a>
        <a href="https://github.com/jameseaster" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" style={{height: '39.4px', marginRight: '15px', marginBottom: '-0.7px'}}/>
        </a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar
