import Link from "next/link";
import Tilt from "react-parallax-tilt";
import {BsGithub, BsBoxArrowUpRight} from "react-icons/bs";
import {Fragment, useEffect, useState} from "react";
import {projects} from "../config";

const Projects = ({mode}) => {
  return (
    <Fragment>
      <div className="project-group__main-title">What I&#39;ve built</div>

      {projects.map((project, index) => (
        <div
          className={`project${(index + 1) % 2 === 0 ? "--even" : ""}`}
          key={index}
        >
          {mode === "desktop" && (
            <Tilt
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={900}
              scale={1.1}
              transitionSpeed={2000}
              gyroscope={true}
            >
              <img className="project__img" src={project.img} />
            </Tilt>
          )}
          {mode === "mobile" && (
            <img className="project__img" src={project.img} />
          )}

          <div
            className={`project__detail${
              (index + 1) % 2 === 0 ? "--even" : ""
            }`}
          >
            <div className="project__title">{project.title}</div>
            <div
              className={`project__desc${
                (index + 1) % 2 === 0 ? "--even" : ""
              }`}
            >
              {project.desc}
            </div>
            <ul
              className={`project__stacks${
                (index + 1) % 2 === 0 ? "--even" : ""
              }`}
            >
              {project.stacks.map((stack) => (
                <li className="project__stack" key={`project-${stack}`}>
                  {stack}
                </li>
              ))}
            </ul>
            <div
              className={`project__links${
                (index + 1) % 2 === 0 ? "--even" : ""
              }`}
            >
              <Link legacyBehavior href={project.github}>
                <a target="_blank" className="project__link">
                  <BsGithub />
                </a>
              </Link>
              <Link legacyBehavior href={project.liveDemo}>
                <a target="_blank" className="project__link">
                  <BsBoxArrowUpRight />
                </a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};
export default Projects;
