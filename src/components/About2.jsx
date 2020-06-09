import React from 'react';
import styled from 'styled-components';

import background from '../images/computer_background.jpeg'

const About2Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #6B7A8F;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;

  @media (min-width: 969px) {
    background: url(${background}) no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    padding-left: 150px;
    padding-right: 150px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    background-color: #6B7A8F;
    padding: 50px 100px;
    border-radius: 5px;
    @media (max-width: 969px) {
      padding: 0px 20px;
      border-radius: 0px;
    }
  }

  .title {
    padding-top: 50px;
    padding-bottom: 30px;
    @media (max-width: 969px) {
      padding-top: 50px;
      padding-bottom: 10px;
    }
  }

  .subtitle {
    @media (max-width: 969px) {
    width: 250px;
    }
    text-align: center;
  }

  .body-container {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
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

  .container-left {
    flex: 2;

    @media (min-width: 969px) {
      padding-left: 50px;
      padding-right: 50px;
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
`

const About2 = () => {
  return (
    <About2Style id="about2" >
      <div className='container'>
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
                Lately, I have been working in JavaScript specifically utilizing
                React Native & Redux to build mobile applications. I see both mobile and
                web applications as an awesome opportunity to connect with people and
                add value to their life.
              </p>
            </div>
          </div>
        </div>
        <div className='tech-container'>
          <h4>Recent Tech:</h4>
          <p>React · React Native · Redux · Socket.IO · GoogleAuth</p>
          <p>Node.js · Feathers · Express · MariaDB · MongoDB</p>
          <p>JavaScript · HTML · CSS · AWS · Heroku</p>
        </div>
      </div>
    </About2Style>
  )
}

export default About2
