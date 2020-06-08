import React from 'react';
import styled from 'styled-components';

import laptop from '../images/coffee.jpeg'

const ApplicationsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: #404040;
  @media screen
    and (min-device-width: 1200px)
    and (max-device-width: 1600px) {
    min-height: 100vh;
  }
  color: #fff;

  .header {
    margin-top: 50px;
    margin-bottom: 25px;
  }
  .app-container {
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
  .img {
    width: 400px;
    margin-bottom: 20px;
  }
  .app-text {
    flex: 1;
    flex-direction: column;
    text-align: left;
    align-items: center;
    justify-content: center;
    margin: 10%;
    @media (min-width: 969px) {
      margin: 5% 0% 5% 10%;
    }
  }
  .app-img {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 969px) {
      padding: 5% 10% 5% 0%;
    }
  }
`

const Applications = () => {
  return (
    <ApplicationsStyle id="applications" >
      <h3 className='header'>Applications</h3>

      <div className="app-container">
        <div className='app-text'>
          <h4>Title:</h4>
          <h4>link:</h4>
          <h4>Explanatory sentence or two</h4>
          <h4>Tech used:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce odio quam, pellentesque ac finibus nec, auctor dignissim
            diam. Nam placerat porta efficitur. Quisque blandit erat non
            ultrices lacinia.
          </p>
        </div>
        <div className='app-img'>
          <img src={laptop} className='img' alt='laptop'></img>
        </div>
      </div>
      <div className="app-container">
        <div className='app-text'>
          <h4>Title:</h4>
          <h4>link:</h4>
          <h4>Explanatory sentence or two</h4>
          <h4>Tech used:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce odio quam, pellentesque ac finibus nec, auctor dignissim
            diam. Nam placerat porta efficitur. Quisque blandit erat non
            ultrices lacinia.
          </p>
        </div>
        <div className='app-img'>
          <img src={laptop} className='img' alt='laptop'></img>
        </div>
      </div>
      <div className="app-container">
        <div className='app-text'>
          <h4>Title:</h4>
          <h4>link:</h4>
          <h4>Explanatory sentence or two</h4>
          <h4>Tech used:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Fusce odio quam, pellentesque ac finibus nec, auctor dignissim
            diam. Nam placerat porta efficitur. Quisque blandit erat non
            ultrices lacinia.
          </p>
        </div>
        <div className='app-img'>
          <img src={laptop} className='img' alt='laptop'></img>
        </div>
      </div>
    </ApplicationsStyle>
  )
}

export default Applications
