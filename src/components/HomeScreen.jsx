import React from 'react';
import styled from 'styled-components';


const HomeScreenStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #282c34;
  height: 100vh;
  color: #fff;
`

const HomeScreen = () => {
  return (
    <HomeScreenStyle>
      <div>
        <h3>James Easter</h3>
      </div>
    </HomeScreenStyle>
  )
}

export default HomeScreen
