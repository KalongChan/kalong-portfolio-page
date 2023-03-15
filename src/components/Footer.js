import Link from "next/link";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <li className="footer__links-link">
          <Link href="https://github.com/KalongChan">
            <BsGithub />
          </Link>
        </li>
        <li className="footer__links-link">
          <Link href="https://www.linkedin.com/in/kalong-chan-03663217a">
            <BsLinkedin />
          </Link>
        </li>
        <li className="footer__links-link">
          <Link href="mailto:kalongchan1113@gmail.com">
            <HiOutlineMail />
          </Link>
        </li>
      </ul>

      <div className="footer__text">Made by Kalong Chan</div>
    </footer>
  );
};

export default Footer;
