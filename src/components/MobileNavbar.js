import Link from "next/link";
import {useState, Fragment} from "react";
import {navData} from "../config";

const MobileNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };

  //Disable scroll if menu is opened
  openMenu
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <Fragment>
      <header className="mobile-nav">
        <div className="hamburger-container" onClick={menuHandler}>
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
                <Link href={item.id} scroll={false}>
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
