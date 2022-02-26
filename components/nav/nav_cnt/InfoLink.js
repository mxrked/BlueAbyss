import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

import styles from "../../../styles/layout/nav/Nav.module.css";

const InfoLink = () => {
  return (
    <div id={styles.infoLink} className="info_link">
      <Link href="/next-projects/blueabyss/info/">
        <a className="page-transition">
          <FaInfoCircle />
        </a>
      </Link>
    </div>
  );
};

export default InfoLink;
