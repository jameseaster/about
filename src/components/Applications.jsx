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
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 10%;
    @media (min-width: 969px) {
      margin: 5% 10% 5% 0%;
    }
    a {
      text-decoration: none;
      color: #fff;
      font-size: small;
      font-style: italic;
    }
    a:hover {
      color: dodgerblue;
    }
  }
  .app-img {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 969px) {
      padding: 5% 0% 5% 10%;
    }
  }
  .app-img:hover {
    filter: brightness(130%);
  }
`

const Applications = () => {
  return (
    <ApplicationsStyle id="applications" >
      <h3 className='header'>Applications</h3>
      <div className="app-container">
        <div className='app-img'>
          <a href="https://github.com/Team-GreenDev/flourish" target="_blank" rel="noopener noreferrer">
            <img src={laptop} className='img' alt='laptop'></img>
          </a>
        </div>
        <div className='app-text'>
          <h3 style={{margin: '5px'}}>Flourish</h3>
          <h4>A mobile application for the plant-owning community.</h4>
          <p style={{margin: '20px 5px 0px 5px'}}>
            Features: Plant Identification, Augmented Reality, Direct Messaging,
            Posting, Following, & Sharing
          </p>
          <p style={{margin: '20px 5px 0px 5px'}}>
            Tech Stack: React Native, Redux, Expo, ngrok, Google Login, PlantId,
            FeatherJS, NodeJS, MariaDB, Three.js
          </p>
          <a href="https://github.com/Team-GreenDev/flourish" target="_blank" rel="noopener noreferrer">
            <p style={{margin: '20px 5px 0px 5px'}}>code on github</p>
          </a>
        </div>
      </div>
      <div className="app-container">
        <div className='app-img'>
          <a href="https://github.com/team-tauros/doodle-society-1" target="_blank" rel="noopener noreferrer">
            <img src={laptop} className='img' alt='laptop'></img>
          </a>
        </div>
        <div className='app-text'>
          <h3 style={{margin: '5px'}}>Doodle Society</h3>
          <h4>A web application to share doodles.</h4>
          <p style={{margin: '20px 5px 0px 5px'}}>
            Features: Geolocation, Live Doodling, Instant Messaging,
            Sharing via Text Message, & Rankings
          </p>
          <p style={{margin: '20px 5px 0px 5px'}}>
            Tech Stack: React, Twilio, Bootstrap, Pusher, Cloudinary,
            Fastify, NodeJS, Postgres, Google Maps
          </p>
          <a href="https://github.com/team-tauros/doodle-society-1" target="_blank" rel="noopener noreferrer">
            <p style={{margin: '20px 5px 0px 5px'}}>code on github</p>
          </a>
        </div>
      </div>
      <div className="app-container">
        <div className='app-img'>
          <a href="https://github.com/team-tauros/Howdy" target="_blank" rel="noopener noreferrer">
            <img src={laptop} className='img' alt='laptop'></img>
          </a>
        </div>
        <div className='app-text'>
          <h3 style={{margin: '5px'}}>Howdy</h3>
          <h4>A web application for throwing virtual parties</h4>
          <p style={{margin: '20px 5px 0px 5px'}}>
            Features: Geolocation, Google Authentication, Live Messaging,
            Game ("Who Am I?"), & Creating a Party
          </p>
          <p style={{margin: '20px 5px 0px 5px'}}>
            Tech Stack: React, Socket.io, React-Router, Google Auth, Axios,
            Express, NodeJS, MySql
          </p>
          <a href="https://github.com/team-tauros/Howdy" target="_blank" rel="noopener noreferrer">
            <p style={{margin: '20px 5px 0px 5px'}}>code on github</p>
          </a>
        </div>
      </div>
    </ApplicationsStyle>
  )
}

export default Applications
