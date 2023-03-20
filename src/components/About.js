import Link from "next/link";
import {useInView} from "react-intersection-observer";
import {selfIntroduction} from "@/config";

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
        <div className="about__left-text">{selfIntroduction}</div>
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
