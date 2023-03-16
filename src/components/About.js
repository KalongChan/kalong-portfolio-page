import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <div className="about__left">
        <div className="about__left-title">About Me</div>
        <div className="about__left-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          repellat quae mollitia eum reprehenderit non exercitationem eveniet
          dicta, consectetur, laborum nemo repudiandae commodi nulla. Nam sint
          repellat repellendus tempore facilis.
        </div>
        <div className="about__left-resume">
          <div className="about__left-resume-btn">View My Resume</div>
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
