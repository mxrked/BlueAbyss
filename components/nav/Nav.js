import styles from "../../styles/layout/nav/Nav.module.css";
import InfoLink from "./nav_cnt/InfoLink";
import Logo from "./nav_cnt/Logo";
import Toggler_M from "./nav_cnt/menu/Toggler";
import Toggler_S from "./nav_cnt/search/Toggler";

const Nav = () => {
  return (
    <nav id={styles.nav}>
      <div className={`${styles.nav_box} container-fluid`}>
        <div className={`${styles.nav_row} row`}>
          <div
            className={`${styles.nav_side} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
            id={styles.navL}
          >
            <Toggler_M />
          </div>
          <div
            className={`${styles.nav_side} col-lg-6 col-md-6 d-lg-grid d-md-grid d-sm-none d-xs-none`}
            id={styles.navM}
          >
            <Logo />
          </div>
          <div
            className={`${styles.nav_side} col-lg-3 col-md-3 col-sm-6 col-xs-6`}
            id={styles.navR}
          >
            <div className={styles.nav_side_set}>
              <Toggler_S />
              <InfoLink />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
