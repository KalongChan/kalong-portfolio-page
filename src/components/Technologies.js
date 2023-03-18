import {useEffect, useState} from "react";

const Technologies = ({inView}) => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (inView) {
      setReveal(true);
    }
  }, [inView]);

  return (
    <div
      className={`tech ${reveal ? "--loaded" : ""}`}
      id="technologies"
      style={{transitionDelay: "200ms"}}
    >
      <div className="tech__left">
        <div className="tech__left-img-row">
          <img src="/Logos/react.png" alt="react" />
          <img src="/Logos/redux.png" alt="redux" />
          <img src="/Logos/nextjs.svg" alt="nextjs" />
          <img src="/Logos/sass.png" alt="sass" />
        </div>

        <div className="tech__left-img-row">
          <img src="/Logos/js.png" alt="js" />
          <img src="/Logos/node.png" alt="node" />
          <img
            src="/Logos/mongodb_rec.png"
            alt="mongodb"
            className="tech__left-img-row--rec"
          />
        </div>

        <div className="tech__left-img-row">
          <img src="/Logos/python.png" alt="python" />
          <img src="/Logos/selenium.png" alt="selenium" />
          <img
            src="/Logos/postman_rec.png"
            alt="postman"
            className="tech__left-img-row--rec"
          />
        </div>
      </div>
      <div className="tech__right">
        <div className="tech__right-title">Technologies</div>
        <div className="tech__right-img">
          <img src="/img/up.png"></img>
          <img src="/img/up.png"></img>
          <img src="/img/up.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
