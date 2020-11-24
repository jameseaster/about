import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

import { iconList } from "../../data/IconInfo";
import Icon from "./Icon";

const Nav = styled.nav`
  position: fixed;
  background-color: #fff;
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  .icon-container {
    padding: 15px 0;
  }

  img: hover {
    transform: scale(1.1, 1.1);
  }
`;

const Navbar = () => (
  <Nav>
    <div className="icon-container">
      {iconList.map((icon) => (
        <Icon url={icon.url} img={icon.img} style={icon.style} />
      ))}
    </div>
    <Burger />
  </Nav>
);

export default Navbar;
