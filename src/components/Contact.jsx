import React from 'react';
import styled from 'styled-components';


const ContactStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: teal;
  height: 100vh;
  color: #fff;
`

const Contact = () => {
  return (
    <ContactStyle id="contact">
      <div>
        <h3>Contact</h3>
      </div>
    </ContactStyle>
  )
}

export default Contact
