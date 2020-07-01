import React from "react";
import styled from "styled-components";

import flourish from "../images/flourish/flourish_1.PNG";
import doodle from "../images/doodle/doodle_1.png";
import howdy from "../images/howdy/howdy_1.png";
import algo from "../images/Algo-Visualizer.png";

const ApplicationsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: #404040;
  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
    min-height: 100vh;
  }
  color: #fff;

  .header {
    margin-top: 50px;
  }
  .app-container {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px 0px 40px;
    @media (max-width: 900px) {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
    }
  }
  .img {
    width: 500px;
    border-radius: 4px;
    padding-left: 100px;
    @media (max-width: 900px) {
      width: 400px;
      padding-left: 0px;
    }
    @media (max-width: 525px) {
      width: 300px;
    }
  }
  .flourish {
    width: auto;
    max-height: 400px;
  }

  .app-text {
    flex: 1;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0% 10% 0% 2%;
    @media (max-width: 900px) {
      max-width: 400px;
      margin: 0% 2% 0% 2%;
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
    margin: 0% 2% 0% 5%;
    @media (max-width: 900px) {
      margin: 0% 2% 0% 2%;
    }
  }

  .app-img:hover {
    filter: brightness(50%);
  }
`;

const Applications = () => {
  return (
    <ApplicationsStyle id="applications">
      <h3 className="header">Applications</h3>
      <div className="app-container">
        <div className="app-img">
          <a
            href="https://youtu.be/K9k9t54Spxc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={flourish} className="img flourish" alt="flourish"></img>
          </a>
        </div>
        <div className="app-text">
          <h3 style={{ margin: "5px" }}>Flourish</h3>
          <h4>A mobile application for the plant-owning community.</h4>
          <p style={{ margin: "20px 5px 0px 5px" }}>
            Features: Plant Identification, Augmented Reality, Direct Messaging,
            Posting, Following, & Sharing
          </p>
          <p style={{ margin: "20px 5px 0px 5px" }}>
            Tech Stack: React Native, Redux, Expo, ngrok, Google Login, PlantId,
            FeatherJS, NodeJS, MariaDB, Three.js
          </p>
          <a
            href="https://github.com/Team-GreenDev/flourish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ margin: "20px 5px 0px 5px" }}>code on github</p>
          </a>
        </div>
      </div>
      <div className="app-container">
        <div className="app-img">
          <a
            href="https://jameseaster.github.io/algo-visualization/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={algo} className="img" alt="Algo-Visualizer"></img>
          </a>
        </div>
        <div className="app-text">
          <h3 style={{ margin: "5px" }}>Algo-Visualizer</h3>
          <h4>A web application visualize sorting algorithms</h4>
          <p style={{ margin: "20px 5px 0px 5px" }}>
            Features: Depicts five different sorting algorithms, visualizing
            their efficiency and execution
          </p>
          <p style={{ margin: "20px 5px 0px 5px" }}>Tech Stack: Vue.js</p>
          <a
            href="https://github.com/jameseaster/algo-visualization"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ margin: "20px 5px 0px 5px" }}>code on github</p>
          </a>
        </div>
      </div>
      <div className="app-container">
        <div className="app-img">
          <a
            href="https://youtu.be/RrTmyRj_7aw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={doodle} className="img" alt="Doodle Society"></img>
          </a>
        </div>
        <div className="app-text">
          <h3 style={{ margin: "5px" }}>Doodle Society</h3>
          <h4>A web application to share doodles.</h4>
          <p style={{ margin: "20px 5px 0px 5px" }}>
            Features: Geolocation, Live Doodling, Instant Messaging, Sharing via
            Text Message, & Rankings
          </p>
          <p style={{ margin: "20px 5px 0px 5px" }}>
            Tech Stack: React, Twilio, Bootstrap, Pusher, Cloudinary, Fastify,
            NodeJS, Postgres, Google Maps
          </p>
          <a
            href="https://github.com/team-tauros/doodle-society-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ margin: "20px 5px 0px 5px" }}>code on github</p>
          </a>
        </div>
      </div>
      <div className="app-container">
        <div className="app-img">
          <a
            href="https://youtu.be/wAt3b_yNUwU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={howdy} className="img" alt="Howdy"></img>
          </a>
        </div>
        <div className="app-text">
          <h3 style={{ margin: "5px" }}>Howdy</h3>
          <h4>
            A web application for throwing virtual parties with your neighbors
          </h4>
          <p style={{ margin: "20px 5px 0px 5px" }}>
            Features: Geolocation, Google Authentication, Live Messaging, Game
            ("Who Am I?"), & Creating a Party
          </p>
          <p style={{ margin: "20px 5px 0px 5px" }}>
            Tech Stack: React, Socket.io, React-Router, Google Auth, Axios,
            Express, NodeJS, MySql
          </p>
          <a
            href="https://github.com/team-tauros/Howdy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ margin: "20px 5px 0px 5px" }}>code on github</p>
          </a>
        </div>
      </div>
    </ApplicationsStyle>
  );
};

export default Applications;
