import Link from "next/link";
import {useState, Fragment, useEffect} from "react";
import {navData} from "../config";

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  const menuHandler = () => {
    if (!scrollUp) {
      return;
    }
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  //Disable scroll if menu is opened
  openMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  //Close openMenu to false after clicking links inside menu
  const clickLinkHandler = () => {
    setOpenMenu(false);
  };

  //Detect scroll direction
  const scrollDirection = () => {
    if (window.pageYOffset < 0) {
      return;
    }

    if (window.pageYOffset > prevScroll) {
      setScrollUp(false);
    } else {
      setScrollUp(true);
    }
    setPrevScroll(window.pageYOffset);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollDirection);
    }
    return () => {
      window.removeEventListener("scroll", scrollDirection);
    };
  }),
    [prevScroll];

  return (
    <Fragment>
      <header
        className={`mobile-nav ${
          scrollUp ? "--nav-scroll-up" : "--nav-scroll-down"
        }`}
      >
        <div
          className={`hamburger-container ${isLoaded ? "--loaded" : ""}`}
          onClick={menuHandler}
        >
          <div className={`mobile-nav__hamburger${openMenu ? "--active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`mobile-nav__slide-menu${openMenu ? "--active" : ""}`}>
          <ul className="mobile-nav__slide-menu-list">
            {navData.map((item, index) => (
              <li
                className="mobile-nav__slide-menu-item"
                id={item.id}
                key={index}
              >
                <Link href={item.id} scroll={false} onClick={clickLinkHandler}>
                  {item.nav}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`mobile-nav__overlay${openMenu ? "--active" : ""}`}
          onClick={menuHandler}
        ></div>
      </header>
    </Fragment>
  );
};
export default MobileNavbar;
