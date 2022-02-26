import Link from "next/link";
import { FaRegistered } from "react-icons/fa";

import styles from "../../../styles/layout/footer/Footer.module.css";

const LogoAndText = () => {
  return (
    <div id={styles.logoAndText}>
      <Link href="/next-projects/blueabyss/">
        <a className="page-transition">
          <h1>
            Blue Abyss <FaRegistered className={styles.fa_icon} />
          </h1>
          <span>Somewhere beyond the sea.</span>
        </a>
      </Link>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default LogoAndText;
