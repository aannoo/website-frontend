import React from "react";
import "./HomeStyles.css";
import data from "../../../assets/project.json";
import { RecordVoiceOver } from "@material-ui/icons";

export default function ProjectBanner() {
  const projects = data.projects;

  // Sort the projects
  const sortedProjects = projects.sort((a, b) => a.number - b.number);

  // Split the sorted projects into two arrays
  const leftProjects = sortedProjects.slice(0, Math.ceil(sortedProjects.length / 2));
  const rightProjects = sortedProjects.slice(Math.ceil(sortedProjects.length / 2));

  return (
    <div className="projects-container">
      <h2 className="project-title">List of Our Projects</h2>
      <div className="project-columns">
        <div className="project-column">
          {leftProjects.map((project, index) => (
            <div key={project.number} className="project">
              <span className="project-number">Project {project.number}: </span>
              <span className="project-name">{project.name}</span>
            </div>
          ))}
        </div>
        <div className="project-column">
          {rightProjects.map((project, index) => (
            <div key={project.number} className="project">
              <span className="project-number">Project {project.number}: </span>
              <span className="project-name">{project.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
