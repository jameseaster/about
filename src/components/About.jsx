import React from 'react';
import styled from 'styled-components';

import redux from '../images/tech/redux.png';
import expo from '../images/tech/expo.png';
import feathersjs from '../images/tech/feathersjs.png';
import JS_HTML_CSS from '../images/tech/JS_HTML_CSS.png';
import mariadb from '../images/tech/mariadb.png';
import nodejs from '../images/tech/nodejs.png';
import react from '../images/tech/react.png';

const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #6B7A8F;
  padding-left: 10px;
  padding-right: 10px;
  color: #fff;
  min-height: 100vh;

  @media (min-width: 969px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (max-width: 969px) {
    flex-direction: column;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .title {
    margin-top: 50px;
    padding-bottom: 20px;
  }

  .subtitle {
    min-width: 300px;
  }

  .section {
    margin-top: 30px;
    margin-bottom: 30px;
    min-width: 325px;
    max-width: 500px;
  }

  .header {
    max-width: 600;
    margin-bottom: 0px;
    min-width: 325px;
  }


  .section-img {
  @media (max-width: 700px) {
    max-width: 350px;
  }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  img {
    margin: 10px;
    height: 40px;
  }

  .nodejs {
    height: 80px;
  }
`

const About = () => {
  return (
    <AboutStyle id="about" >
      <div className='header'>
        <h3 className='title'>ABOUT</h3>
        <h4  className='subtitle'>
          Hello! I am a software engineer based in New Orleans, LA.
        </h4>
        </div>
      <div className='section'>
        <p>
          I love developing applications that solve problems for other people.
          I’m always interested in diving into new software engineering technologies
          that allow for more efficient and effective work flow.
        </p>
      </div>
      <div className="section-img">
        <img src={JS_HTML_CSS} alt="JS_HTML_CSS"/>
        <img src={react} alt="react"/>
        <img src={nodejs} alt="nodejs" className="nodejs"/>
        <img src={redux} alt="redux"/>
        <img src={mariadb} alt="mariadb"/>
        <img src={feathersjs} alt="feathersjs"/>
        <img src={expo} alt="expo"/>
      </div>
      <div className='section'>
        <p>
          Recently, I have been working in JavaScript specifically utilizing
          React Native & Redux to build mobile applications. I see both mobile and
          web applications as an awesome opportunity to connect with people and
          add value to their daily life.
        </p>
      </div>
    </AboutStyle>
  )
}

export default About
