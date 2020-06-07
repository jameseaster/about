import React from 'react';
import styled from 'styled-components';
import background from '../images/Home_Screen_Background.jpeg';

const HomeScreenStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #282c34;
  height: 100vh;
  color: #fff;
}

.text-container {
  text-align: left;
  position: absolute;
  top: 200px;
  right: 350px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
  border-radius: 10px;
}
.background {
  width: 100%;
}
`

const HomeScreen = () => {
  return (
    <HomeScreenStyle id="home">
      <img src={background} className="background" alt='background'/>
      <div className='text-container'>
        <h1>James Easter</h1>
        <h2>software engineer</h2>
        <p>I'm a creative, adaptable workhorse</p>
      </div>
    </HomeScreenStyle>
  )
}

export default HomeScreen
