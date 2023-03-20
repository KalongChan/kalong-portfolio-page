import Link from "next/link";
import {useEffect, useState} from "react";
import {navData} from "../config";

const Navbar = ({activeSection, isNavLoaded}) => {
  const [isLoaded, setIsLoaded] = useState(false);

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
