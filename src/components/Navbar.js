import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {navData} from "../config";

const Navbar = ({activeSection}) => {
  const [scrollUp, setScrollUp] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  // const scrollDirection = () => {
  //   if (window.pageYOffset > prevScroll) {
  //     setScrollUp(false);
  //   } else {
  //     setScrollUp(true);
  //   }
  //   setPrevScroll(window.pageYOffset);
  // };

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("scroll", scrollDirection);
  //   }
  //   return () => {
  //     window.removeEventListener("scroll", scrollDirection);
  //   };
  // }),
  //   [prevScroll];

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`navbar`}>
      <div className="navbar__container">
        <ul className="navbar__list">
          {navData.map((item, index) => (
            <li
              className={`navbar__list-item${
                activeSection.lastIndexOf(true) === index ? "--active" : ""
              }`}
              id={item.id}
              key={index}
            >
              <Link href={item.id} scroll={false}>
                {item.nav}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className={`navbar__container${scrollUp ? "--shown" : "--hidden"}`}>
        <ul className={`navbar__list`}>
          <li className="navbar__list-item" onClick={scrollToTop}>
            home
          </li>
          <li className="navbar__list-item">
            <Link href="#about" scroll={false}>
              about
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link href="#technologies" scroll={false}>
              technologies
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link href="#jobs" scroll={false}>
              experiences
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link href="#projects" scroll={false}>
              projects
            </Link>
          </li>
          <li className="navbar__list-item">resume</li>
        </ul>
      </div> */}
    </header>
  );
};

export default Navbar;
