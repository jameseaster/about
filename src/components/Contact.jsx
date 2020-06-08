import React from 'react';
import styled from 'styled-components';
import background from '../images/Home_Screen_Background.jpeg';
import background_mobile from '../images/Mobile_Home_Screen_Background.jpeg';

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
    text-align: left;
    align-items: center;
    justify-content: center;
    margin: 10%;
    background-color: rgba(0,0,0,0.4);
    padding: 20px;
    border-radius: 8px;
    @media (min-width: 969px) {
      width: 50%;
      margin: 5%;
    }
  }
  .extra-space{
    flex-grow: 3;
  }
  .footer {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgba(0,0,0,0.4);
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const Contact = () => {
  return (
    <ContactStyle id="contact" >
      <h3 className='header'>Contact</h3>
      <div className="body-container">
        <div className='app-text'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce odio quam, pellentesque ac finibus nec, auctor dignissim
            diam. Nam placerat porta efficitur. Quisque blandit erat non
            ultrices lacinia.
          </p>
          <h4>Email address</h4>
        </div>
      </div>
      <div className='extra-space'></div>
      <div className='footer'>
        <p>built & designed by James Easter</p>
        <p>add in all of the icons here in white or black</p>
      </div>
    </ContactStyle>
  )
}

export default Contact

