import LogoAndText from "./footer_cnt/LogoAndText";
import UnderFooter from "./footer_cnt/UnderFooter";

import styles from "../../styles/layout/footer/Footer.module.css";
import Links from "./footer_cnt/Links";
import Newsletter from "./footer_cnt/Newsletter";
import Contact from "./footer_cnt/Contact";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={`${styles.footer_box} container-fluid`}>
        <div className={`${styles.footer_row} row`}>
          <div
            className={`${styles.footer_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
            id={styles.footerL}
          >
            <div className={styles.footer_side_cnt}>
              <LogoAndText />
            </div>
          </div>
          <div
            className={`${styles.footer_side} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            id={styles.footerM}
          >
            <div className={styles.footer_side_cnt}>
              <Links />
            </div>
          </div>
          <div
            className={`${styles.footer_side} col-lg-4 col-md-4 col-sm-6 col-xs-12`}
            id={styles.footerR}
          >
            <div className={styles.footer_side_cnt}>
              <Newsletter />
              <Contact />
            </div>
          </div>
        </div>
      </div>

      <UnderFooter />
    </footer>
  );
};

export default Footer;
