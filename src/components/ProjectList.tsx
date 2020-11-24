import React from "react";
import styled from "styled-components";

import ProjectListItem from "./ProjectListItem";
import { projectList } from "../data/ProjectInfo";

const ProjectListStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  background-color: #404040;
  padding-top: 30px;
  padding-bottom: 30px;

  @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
    min-height: 100vh;
  }
  color: #fff;

  .header {
    margin-top: 50px;
  }
`;

const ProjectList = () => (
  <ProjectListStyle id="Projects">
    <h3 className="header">Recent Projects</h3>
    {projectList.map((item) => (
      <ProjectListItem
        link={item.link}
        title={item.title}
        img={item.img}
        style={item.style}
        subtitle={item.subtitle}
        features={item.features}
        techStack={item.techStack}
        github={item.github}
      />
    ))}
  </ProjectListStyle>
);

export default ProjectList;
