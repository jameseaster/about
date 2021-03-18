// React Imports
import React from "react";

// Style Imports
import { ProjectListStyle } from "./styles";

// Components
import { ProjectListItem } from "../ProjectListItem";

// Data
import { projectData } from "../../data/ProjectData";

/**
 * ProjectList
 *
 * A list of my projects, showing an image, link, and details
 * for each project
 */
export const ProjectList: React.FC<{}> = () => (
  <ProjectListStyle id="Projects">
    <h3 className="header">Recent Projects</h3>
    {projectData.map((item) => (
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
