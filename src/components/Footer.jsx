import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
  background-color: #fff;
  color: #333;
  text-align: center;
  border-top: 1px solid #f7882f;

  @media (min-width: 768px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>built & designed by James Easter</p>
    </FooterStyle>
  );
};

export default Footer;
