import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";

const About = ({inView}) => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (inView) {
      setReveal(true);
    }
  }, [inView]);

  return (
    <div className={`about ${reveal ? "--loaded" : ""}`}>
      <div className="about__left">
        <div className="about__left-title">About Me</div>
        <div className="about__left-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          repellat quae mollitia eum reprehenderit non exercitationem eveniet
          dicta, consectetur, laborum nemo repudiandae commodi nulla. Nam sint
          repellat repellendus tempore facilis.
        </div>
        <div className="about__left-resume">
          <div className="about__left-resume-btn">
            <Link legacyBehavior href="resume.pdf">
              <a target="_blank">View My Resume</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="about__right">
        <img
          src="/img/about_img.png"
          alt="about"
          className="about__right-img"
        />
      </div>
    </div>
  );
};

export default About;
