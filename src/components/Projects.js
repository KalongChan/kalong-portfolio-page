import {Fragment, useState} from "react";
import {projects} from "../config";
import Project from "./Project";

const Projects = ({mode, inView}) => {
  const [firstProjectReveal, setFirstProjectReveal] = useState(false);

  const isFirstProjectInView = (firstProject) => {
    setFirstProjectReveal(firstProject);
  };

  return (
    <Fragment>
      <div
        className={`projects__main-title ${
          firstProjectReveal ? "--loaded" : ""
        }`}
      >
        What I&#39;ve built
      </div>

      {projects.map((project, index) => (
        <Project
          project={project}
          index={index}
          key={index}
          mode={mode}
          isFirstProjectInView={isFirstProjectInView}
        />
      ))}
    </Fragment>
  );
};
export default Projects;
