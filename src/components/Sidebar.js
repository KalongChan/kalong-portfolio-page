import Link from "next/link";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__container">
        <ul className="sidebar__items">
          <li className="sidebar__items-item">
            <Link href="https://github.com/KalongChan">
              <BsGithub />
            </Link>
          </li>
          <li className="sidebar__items-item">
            <Link href="https://www.linkedin.com/in/kalong-chan-03663217a">
              <BsLinkedin />
            </Link>
          </li>
          <li className="sidebar__items-item">
            <Link href="mailto:kalongchan1113@gmail.com">
              <HiOutlineMail />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
