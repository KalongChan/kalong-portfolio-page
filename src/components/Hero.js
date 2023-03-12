import {Fragment, useEffect, useState} from "react";

const HomeHero = () => {
  const typewriterText = "Hello World!";
  const [animatedText, setAnimatedText] = useState([]);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing && animatedText !== typewriterText) {
        setAnimatedText(typewriterText.slice(0, animatedText.length + 1));
      }
      if (typing && animatedText === typewriterText) {
        setTyping(false);
      }
      if (!typing) {
        setAnimatedText(typewriterText.slice(0, animatedText.length - 1));
        if (animatedText.length < 1) {
          setTyping(true);
          setAnimatedText([]);
        }
      }
    }, 200);
  }, [animatedText, typing]);

  return (
    <Fragment>
      <div className="hero" id="home">
        <div className="hero__left">
          <div className="hero__left-title">
            Hi, my <br />
            name is <b className="hero__left--highlight">Kalong</b>
          </div>
          <div className="hero__left-text">
            I&#39;m a <b className="hero__left--highlight">QA Engineer</b>
            {" / "}
            <b className="hero__left--highlight">Front-end Developer</b>
            <br />
            from <span className="hero__left-delete-line">Hong Kong</span>{" "}
            Taiwan
          </div>
          <div className="hero__left-scroll">
            <div className="hero__left-scroll-s">s</div>
            <div className="hero__left-scroll-c">c</div>
            <div className="hero__left-scroll-r">r</div>
            <div className="hero__left-scroll-o">o</div>
            <div className="hero__left-scroll-l-1">l</div>
            <div className="hero__left-scroll-l-2">l</div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__right-svg">
            <svg
              viewBox="0 75 508 443"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_71:15)" className="top-bar">
                {/* Terminal background */}
                <rect
                  x="37.157"
                  y="78.8663"
                  width="433.001"
                  height="286.425"
                  rx="10"
                  fill="#3D3D3D"
                />
                {/* Top bar background color #575757 */}
                <path
                  d="M37.157 88.8663C37.157 83.3434 41.6341 78.8663 47.157 78.8663H460.158C465.681 78.8663 470.158 83.3435 470.158 88.8663V93.9413H37.157V88.8663Z"
                  fill="#575757"
                />
                {/* 3 Top bar buttons */}
                <ellipse
                  cx="47.3915"
                  cy="86.0071"
                  rx="3.93641"
                  ry="3.9671"
                  fill="#DF5B5B"
                />
                <ellipse
                  cx="59.2006"
                  cy="86.0071"
                  rx="3.93641"
                  ry="3.9671"
                  fill="#CBC270"
                />
                <ellipse
                  cx="71.0097"
                  cy="86.0071"
                  rx="3.93637"
                  ry="3.9671"
                  fill="#91D68B"
                />
                {/* typewriter */}
                <foreignObject x="50" y="100" width="550" height="50">
                  <div
                    className="hero__right-svg-type-writer"
                    xmlns="http://www.w3.org/1999/xhtml"
                  >
                    Kalong$&nbsp;{animatedText}
                    <span className="hero__right-svg-type-writer-cursor">
                      |
                    </span>
                  </div>
                </foreignObject>
              </g>
              <defs>
                {/* Terminal Shadow */}
                <filter
                  id="filter0_d_71:15"
                  x="33.157"
                  y="78.8663"
                  width="441.001"
                  height="294.425"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_71:15"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_71:15"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomeHero;
