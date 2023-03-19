import Link from "next/link";
import {useInView} from "react-intersection-observer";

const About = () => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    initialInView: true,
    triggerOnce: true,
  });

  return (
    <div className={`about ${inView ? "--loaded" : ""}`} ref={ref}>
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
