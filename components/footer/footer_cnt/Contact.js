import Link from "next/link";

import styles from "../../../styles/layout/footer/Footer.module.css";

const Contact = () => {
  return (
    <div id={styles.contact}>
      <Link href="#">
        <a className="page-transition">contact@basicallyeasy.com</a>
      </Link>

      <Link href="#">
        <a className="page-transition">+1 (202) 555-0630</a>
      </Link>
    </div>
  );
};

export default Contact;
