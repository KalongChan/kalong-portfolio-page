import Link from "next/link";
import Tilt from "react-parallax-tilt";
import {BsGithub, BsBoxArrowUpRight} from "react-icons/bs";

const Projects = () => {
  return (
    <div className="project-group" id="projects">
      <div className="project-group__main-title">Somethings I&#39;ve built</div>
      <div className="project">
        {/* <img
          src="/img/foodbearcat.png"
          alt="foodbearcat"
          className="project__img"
        /> */}
        <Tilt
          tiltMaxAngleX={35}
          tiltMaxAngleY={35}
          perspective={900}
          scale={1.1}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <img className="project__img" src="/img/foodbearcat.png" />
        </Tilt>
        <div className="project__detail">
          <div className="project__title">FoodBearCat</div>
          <div className="project__desc">
            A fullstack food ordering website with fully functional order,
            register & login system
          </div>
          <div className="project__stacks">
            <ul>
              <li>React JS</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="project__links">
            <Link
              legacyBehavior
              href="https://github.com/KalongChan/FoodBearCat"
            >
              <a target="_blank" className="project__detail-link">
                <BsGithub />
              </a>
            </Link>
            <Link legacyBehavior href="https://food-bear-cat.vercel.app/">
              <a target="_blank" className="project__detail-link">
                <BsBoxArrowUpRight />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* TEST */}

      <div className="project">
        {/* <img
          src="/img/foodbearcat.png"
          alt="foodbearcat"
          className="project__img"
        /> */}
        <Tilt
          tiltMaxAngleX={35}
          tiltMaxAngleY={35}
          perspective={900}
          scale={1.1}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <img className="project__img" src="/img/foodbearcat.png" />
        </Tilt>
        <div className="project__detail">
          <div className="project__title">FoodBearCat</div>
          <div className="project__desc">
            A fullstack food ordering website with fully functional order,
            register & login system
          </div>
          <div className="project__stacks">
            <ul>
              <li>React JS</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="project__links">
            <Link
              legacyBehavior
              href="https://github.com/KalongChan/FoodBearCat"
            >
              <a target="_blank" className="project__detail-link">
                <BsGithub />
              </a>
            </Link>
            <Link legacyBehavior href="https://food-bear-cat.vercel.app/">
              <a target="_blank" className="project__detail-link">
                <BsBoxArrowUpRight />
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* TEST */}
      <div className="project">
        {/* <img
          src="/img/foodbearcat.png"
          alt="foodbearcat"
          className="project__img"
        /> */}
        <Tilt
          tiltMaxAngleX={35}
          tiltMaxAngleY={35}
          perspective={900}
          scale={1.1}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <img className="project__img" src="/img/foodbearcat.png" />
        </Tilt>
        <div className="project__detail">
          <div className="project__title">FoodBearCat</div>
          <div className="project__desc">
            A fullstack food ordering website with fully functional order,
            register & login system
          </div>
          <div className="project__stacks">
            <ul>
              <li>React JS</li>
              <li>Next.js</li>
              <li>Redux</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="project__links">
            <Link
              legacyBehavior
              href="https://github.com/KalongChan/FoodBearCat"
            >
              <a target="_blank" className="project__link">
                <BsGithub />
              </a>
            </Link>
            <Link legacyBehavior href="https://food-bear-cat.vercel.app/">
              <a target="_blank" className="project__link">
                <BsBoxArrowUpRight />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
