import React from 'react';
import styled from 'styled-components';


const AboutStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: teal;
  height: 100vh;
  color: #fff;
`

const About = () => {
  return (
    <AboutStyle id="about" >
      <div>
        <h3>About</h3>
      </div>
    </AboutStyle>
  )
}

export default About
