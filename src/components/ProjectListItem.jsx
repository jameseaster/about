import React from "react";
import styled from "styled-components";

const ProjectListItemStyle = styled.div`
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

const ProjectListItem = ({
  link,
  title,
  img,
  style,
  subtitle,
  features,
  techStack,
  github,
}) => (
  <ProjectListItemStyle>
    <div className="app-container">
      <div className="app-img">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} className={style} alt="application"></img>
        </a>
      </div>
      <div className="app-text">
        <h3 style={{ margin: "5px" }}>{title}</h3>
        <h4>{subtitle}</h4>
        <p style={{ margin: "20px 5px 0px 5px" }}>{features}</p>
        <p style={{ margin: "20px 5px 0px 5px" }}>{techStack}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <p style={{ margin: "20px 5px 0px 5px" }}>code on github</p>
        </a>
      </div>
    </div>
  </ProjectListItemStyle>
);

export default ProjectListItem;
