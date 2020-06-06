import React, { useState } from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position:fixed;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 2;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ?  '#ccc' : '#333'};
    border-radius: 20px;
    transform-origin: 1px;
    transition: all 0.4s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(405deg)' : 'rotate(0)'}
    }
    
    &:nth-child(2) {
      /* transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'}; */
      opacity: ${({ open }) => open ? 0 : 1};
      transition: 0.1s;

    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(315deg)' : 'rotate(0)'}
    }
  }
`;

const Burger = () => {
  const [ open, setOpen ] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open}/>
    </>
  )
}

export default Burger
