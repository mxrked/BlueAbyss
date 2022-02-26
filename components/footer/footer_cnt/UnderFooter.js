import { FaCopyright, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "../../../styles/layout/footer/Footer.module.css";

const UnderFooter = () => {
  return (
    <div id={styles.underFooter}>
      <div className={`${styles.under_footer_box} container-fluid`}>
        <div className={`${styles.under_footer_row} row`}>
          <div
            className={`${styles.under_footer_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            id={styles.underFooterL}
          >
            <div>
              <FaCopyright className={styles.fa_icon} />

              <p>All rights reserved. 2022-2022.</p>
            </div>
          </div>
          <div
            className={`${styles.under_footer_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            id={styles.underFooterR}
          >
            <div>
              <FaLinkedin className={`${styles.fa_icon} page-transition`} />
              <FaFacebook className={`${styles.fa_icon} page-transition`} />
              <FaTwitter className={`${styles.fa_icon} page-transition`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderFooter;
