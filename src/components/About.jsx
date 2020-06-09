import React from 'react';
import styled from 'styled-components';

import laptop from '../images/computer.jpeg'

const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: #6B7A8F;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;

  @media (min-width: 969px) {
    min-height: 100vh;
    padding-left: 100px;
    padding-right: 100px;
  }

  .title {
    padding-top: 50px;
    padding-bottom: 20px;
    @media (max-width: 969px) {
      padding-top: 50px;
      padding-bottom: 10px;
    }
  }

  .subtitle {
    min-width: 300px;
    text-align: center;
    margin-bottom: 20px;
  }

  .body-container {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;

    @media (max-width: 969px) {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
  }
  }

  .container-left {
    flex: 2;

    @media (min-width: 969px) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .container-right {
    flex: 1;
    padding: 50px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 969px) {
      padding: 0px 0px 50px 0px;
    }
  }

  .paragraph-container {
    margin-top: 30px;
    margin-bottom: 30px;
    min-width: 325px;
  }

  .tech-container {
    flex: 1;
    margin-top: 10px;
    min-width: 390px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: smaller;
  }

  .img {
    width: 350px;
    border-radius: 5px;
  }
`

const About = () => {
  return (
    <AboutStyle id="about" >
      <h3 className='title'>ABOUT</h3>
      <h5  className='subtitle'>
        Hello! I am a software engineer based in New Orleans, LA.
      </h5>
      <div className="body-container">
        <div className="container-left">
          <div className='paragraph-container'>
            <p>
              I love developing applications that solve problems for other people.
              I’m always interested in diving into new software engineering technologies
              that allow for more efficient and effective work flow.
            </p>
          </div>
          <div className='paragraph-container'>
            <p>
              Recently, I have been working in JavaScript specifically utilizing
              React Native & Redux to build mobile applications. I see both mobile and
              web applications as an awesome opportunity to connect with people and
              add value to their daily life.
            </p>
          </div>
        </div>
        <div className="container-right">
        <img src={laptop} className='img' alt='laptop'></img>
        </div>
      </div>
        {/* <div className='tech-container'>
            <h4>Recent Technologies</h4>
          <p>React · React Native · Redux · Socket.IO · GoogleAuth</p>
          <p>Node.js · Feathers · Express · MariaDB · MongoDB</p>
          <p>JavaScript · HTML · CSS · AWS · Heroku</p>
          </div> */}
    </AboutStyle>
  )
}

export default About
