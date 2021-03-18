import styled from "styled-components";

export const NavbarStyle = styled.nav<{}>`
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