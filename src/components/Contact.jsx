import React from "react";
import styled from "styled-components";
import background from "../images/Home_Screen_Background.jpeg";
import background_mobile from "../images/Mobile_Home_Screen_Background.jpeg";

const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  height: 95vh;
  color: #fff;

  @media (max-width: 768px) {
    justify-content: flex-start;
    background: url(${background_mobile}) no-repeat;
    background-size: cover;
    height: 100vh;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding-top: 30px;
  }

  .header {
    margin-top: 50px;
  }
  .body-container {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
  }

  .app-text {
    flex: 1;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 10%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #fff;

    @media (min-width: 969px) {
      width: 100%;
      margin: 5%;
    }
  }
`;

const Contact = () => (
  <ContactStyle id="Contact">
    <div className="container">
      <h3 className="header">CONTACT</h3>
      <div className="body-container">
        <div className="app-text">
          <p style={{ marginBottom: "20px" }}>
            I would love to hear from you, send me an email & stay in touch!
          </p>
          <h4>james.m.easter@gmail.com</h4>
        </div>
      </div>
    </div>
  </ContactStyle>
);

export default Contact;
