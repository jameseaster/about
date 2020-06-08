import React from 'react';
import styled from 'styled-components';

import laptop from '../images/coffee.jpeg'

const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: teal;
  @media screen
    and (min-device-width: 1200px)
    and (max-device-width: 1600px) {
    min-height: 100vh;
  }
  color: #fff;
  padding-left: 100px;
  padding-right: 100px;

  ul {
    margin-top: 30px;
    list-style-type: none;
    columns: 2;
    /* -webkit-columns: 2;
    -moz-columns: 2; */

    li {
      margin: 0px 30px 30px 0px;
    }
  }
  .header {
    @media (max-width: 969px) {
      padding: 50px;
    }
  }
  .body-container {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    @media (max-width: 969px) {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
    }
  }
  }
  .container-left {
    flex: 2;
    padding-left: 50px;
    padding-right: 50px;
  }
  .container-right {
    flex: 1;
    padding: 50px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .paragraph-container-1 {
    margin-bottom: 60px;
  }
  .paragraph-container-2 {
    /* margin-bottom: 50px; */
  }
  .img {
    width: 300px;
    margin-bottom: 20px;
  }
`

const About = () => {
  return (
    <AboutStyle id="about" >
      <h3 className='header'>About</h3>
      <div className="body-container">
      <div className="container-left">
        <div className='paragraph-container-1'>
          <h4>Add a personal narrative</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce odio quam, pellentesque ac finibus nec, auctor dignissim
            diam. Nam placerat porta efficitur. Quisque blandit erat non
            ultrices lacinia.
          </p>
        </div>
        <div className='paragraph-container-2'>
          <h4>Add a professional narrative</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce odio quam, pellentesque ac finibus nec, auctor dignissim
            diam. Nam placerat porta efficitur. Quisque blandit erat non
            ultrices lacinia.
          </p>
        </div>
      </div>
      <div className="container-right">
        <img src={laptop} className='img' alt='laptop'></img>
        <h4>Add technologies</h4>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
            <li>item 7</li>
            <li>item 8</li>
          </ul>
        </div>
      </div>
    </AboutStyle>
  )
}

export default About
