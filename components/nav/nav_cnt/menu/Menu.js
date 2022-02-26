import Link from "next/link";
import { useEffect } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";

import styles from "../../../../styles/layout/nav/Nav.module.css";

const Menu = () => {
  useEffect(() => {
    // Changing background image when hovering over a set
    const bg2 = document.getElementById("menuBG2");
    const bg3 = document.getElementById("menuBG3");

    function changingBG(set, bg) {
      set.addEventListener("mouseenter", () => {
        bg.style.zIndex = 101;
      });

      set.addEventListener("mouseleave", () => {
        bg.style.zIndex = 98;
      });
    }

    changingBG(document.getElementById("menuPages"), bg2);
    changingBG(document.getElementById("menuGalleries"), bg3);

    // Defaults
    const MENU = document.getElementById("menuMain");
    const DARKEN = document.getElementById("menuDarken");

    MENU.style.display = "none";
    MENU.style.width = "0";
    MENU.style.pointerEvents = "none";
    DARKEN.style.display = "none";
    DARKEN.classList.toggle("deactive");
    DARKEN.style.pointerEvents = "none";

    const LINKS = document.getElementById("menuLinks");
    LINKS.classList.toggle("deactive");

    const MENU_BGS = document.getElementById("menuBGS");
    MENU_BGS.classList.toggle("deactive");

    // Closing
    function closeMenu() {
      DARKEN.style.pointerEvents = "none";
      MENU.style.pointerEvents = "none";
      LINKS.style.transform = "translateY(-120px)";
      LINKS.classList.toggle("deactive");
      MENU_BGS.style.transform = "translateX(-120px)";
      MENU_BGS.classList.toggle("deactive");

      setTimeout(() => {
        MENU.style.width = "0";
      }, 600);

      setTimeout(() => {
        DARKEN.classList.toggle("deactive");
      }, 1000);

      setTimeout(() => {
        sessionStorage.removeItem("Menu Toggled");
        document.body.style.overflowY = "auto";
      }, 1500);
    }

    document.getElementById("menuDarken").addEventListener("click", closeMenu);
    document.getElementById("menuCloser").addEventListener("click", closeMenu);
  }, []);

  return (
    <div>
      <div id="menuDarken" className={`${styles.menu_darken} full-second`} />

      <div
        id="menuMain"
        className={`${styles.menu_main} menu_main_OR full-second`}
      >
        <div
          className={`${styles.menu_bgs_holder} ${styles.menu_main_side}`}
          id="menuBGS"
        >
          <BackgroundImage
            src="http://basicallyeasy.com/NextJSCDNS/blueabyss/navigation/webp/bg-1.webp"
            width="100%"
            height="100%"
            id="menuBG1"
            className={`${styles.menu_bg} ${styles.menu_bg_1} page-transition`}
          />
          <BackgroundImage
            src="http://basicallyeasy.com/NextJSCDNS/blueabyss/navigation/webp/bg-2.webp"
            width="100%"
            height="100%"
            id="menuBG2"
            className={`${styles.menu_bg} ${styles.menu_bg_2} page-transition`}
          />
          <BackgroundImage
            src="http://basicallyeasy.com/NextJSCDNS/blueabyss/navigation/webp/bg-3.webp"
            width="100%"
            height="100%"
            id="menuBG3"
            className={`${styles.menu_bg} ${styles.menu_bg_3} page-transition`}
          />
        </div>
        <div className={`${styles.menu_links_side_outer}`} id="menuLinks">
          <button id="menuCloser" className={styles.menu_closer}>
            Close
          </button>
          <div className={`${styles.menu_links} ${styles.menu_main_side}`}>
            <div id="menuPages" className={`${styles.menu_links_set}`}>
              <div className="page-transition">
                <h2 className="page-transition">Pages</h2>

                <ul className="page-transition">
                  <li>
                    <Link href="/next-projects/blueabyss/">
                      <a className="page-transition">Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-projects/blueabyss/info/">
                      <a className="page-transition">Background</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-projects/blueabyss/support/">
                      <a className="page-transition">Get Support</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-projects/blueabyss/policies/">
                      <a className="page-transition">Current Policies</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div id="menuGalleries" className={`${styles.menu_links_set}`}>
              <div className="page-transition">
                <h2 className="page-transition">Galleries</h2>

                <ul className="page-transition">
                  <li>
                    <Link href="/next-projects/blueabyss/galleries/aquatic/">
                      <a className="page-transition">Aquatic</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-projects/blueabyss/galleries/cephalopod/">
                      <a className="page-transition">Cephalopod</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-projects/blueabyss/galleries/crustacean/">
                      <a className="page-transition">Crustacean</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/next-projects/blueabyss/galleries/mammal/">
                      <a className="page-transition">Mammal</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
