// React Imports
import React from "react";

// Style Imports
import { ProjectListItemStyle } from "./styles";

// Type Imports
import { ProjectListItemProps } from "./types";

/**
 * ProjectListItem
 *
 * A reusable list item component that takes in data from a project
 * and renders a list item inside of the ProjectList component
 */
export const ProjectListItem: React.FC<ProjectListItemProps> = ({
  img,
  link,
  title,
  style,
  github,
  subtitle,
  features,
  techStack,
}) => (
  <ProjectListItemStyle>
    <div className="app-container">
      <div className="app-img">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} className={style} alt="application" />
        </a>
      </div>
      <div className="app-text">
        <h3 className="title-margin">{title}</h3>
        <h4>{subtitle}</h4>
        <p className="p_margin">{features}</p>
        <p className="p_margin">{techStack}</p>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <p className="p_margin">code on github</p>
        </a>
      </div>
    </div>
  </ProjectListItemStyle>
);
