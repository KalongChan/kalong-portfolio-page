import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {navData} from "../config";

const Navbar = ({activeSection, isNavLoaded}) => {
  // const [scrollUp, setScrollUp] = useState(true);
  // const [prevScroll, setPrevScroll] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <header className={`navbar`}>
      <div className="navbar__container">
        <ul className="navbar__list">
          {navData.map((item, index) => (
            <li
              className={`navbar__list-item${isLoaded ? "--loaded" : ""}${
                activeSection.lastIndexOf(true) === index ? "--active" : ""
              }`}
              id={item.id}
              key={index}
              style={{transitionDelay: isNavLoaded ? "" : `${index * 100}ms`}}
            >
              <Link href={item.id} scroll={false}>
                {item.nav}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
