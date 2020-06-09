import React from 'react';
import styled from 'styled-components';
import background from '../images/Home_Screen_Background.jpeg';
import background_mobile from '../images/Mobile_Home_Screen_Background.jpeg';

const HomeScreenStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  color: #fff;

.text-container {
  text-align: left;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
  border-radius: 4px;
  margin-left: 250px;
  border: 1px solid #F7882F;
}

@media (max-width: 768px) {
  justify-content: flex-start;
  background: url(${background_mobile}) no-repeat;
  background-size: cover;

  .text-container {
    text-align: left;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    margin-top: 100px;
    margin-left: 0px;
    width: 100vw;
    height: auto;
    border-left: none;
    border-right: none;
    border-radius: 0px;
  }
}
`

const HomeScreen = () => {
  return (
    <HomeScreenStyle id="home">
      <div className='text-container'>
        <h1>James Easter</h1>
        <h2>software engineer</h2>
        <p>I'm a creative, adaptable workhorse.</p>
      </div>
    </HomeScreenStyle>
  )
}

export default HomeScreen
