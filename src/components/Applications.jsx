import React from 'react';
import styled from 'styled-components';


const ApplicationsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: coral;
  height: 100vh;
  color: #fff;
`

const Applications = () => {
  return (
    <ApplicationsStyle id="applications">
      <div>
        <h3>Applications</h3>
      </div>
    </ApplicationsStyle>
  )
}

export default Applications
