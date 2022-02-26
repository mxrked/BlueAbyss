import Link from "next/link";

import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

import { FaRegistered } from "react-icons/fa";

import styles from "../../../styles/layout/nav/Nav.module.css";

const Logo = () => {
  return (
    <div id={styles.logo}>
      <Link href="/next-projects/blueabyss/">
        <a className={`page-transition`} id="navLogo" href="#">
          <img
            src="http://basicallyeasy.com/NextJSCDNS/blueabyss/logos/calypso-logo.png"
            className="page-transition logo_img"
            alt="Blue Abyss Logo."
          />

          <div>
            <h1 className="page-transition logo_cnt">
              Blue Abyss <FaRegistered className={styles.fa_icon} />
            </h1>
            <span className="page-transition logo_cnt">
              Somewhere beyond the sea.
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
