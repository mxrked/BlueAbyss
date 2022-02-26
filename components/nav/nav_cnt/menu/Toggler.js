import { useEffect } from "react";

import styles from "../../../../styles/layout/nav/Nav.module.css";

const Toggler_M = () => {
  useEffect(() => {
    document.getElementById("menuToggler").addEventListener("click", () => {
      //* This will disable vertical scrolling
      sessionStorage.setItem("Menu Toggled", true);
      setTimeout(() => {
        if (sessionStorage.getItem("Menu Toggled")) {
          document.body.style.overflowY = "hidden";
        }
      }, 10);
    });
  }, []);

  useEffect(() => {
    const MENU = document.getElementById("menuMain");
    const DARKEN = document.getElementById("menuDarken");
    const LINKS = document.getElementById("menuLinks");
    const MENU_BGS = document.getElementById("menuBGS");

    document.getElementById("menuToggler").addEventListener("click", () => {
      MENU.style.display = "flex";
      DARKEN.style.display = "block";

      setTimeout(() => {
        DARKEN.classList.remove("deactive");
      }, 500);

      setTimeout(() => {
        MENU.style.width = "100%";
      }, 800);

      setTimeout(() => {
        MENU_BGS.style.transform = "translateX(0)";
        MENU_BGS.classList.remove("deactive");
        LINKS.classList.remove("deactive");
        LINKS.style.transform = "translateY(0)";
      }, 2300);

      setTimeout(() => {
        DARKEN.style.pointerEvents = "auto";
        MENU.style.pointerEvents = "auto";
      }, 2600);
    });
  }, []);
  return (
    <button id="menuToggler" className={styles.menu_toggler}>
      <span className="page-transition menu_toggler_span" />
      <span className="page-transition menu_toggler_span" />
      <span className="page-transition menu_toggler_span" />
    </button>
  );
};

export default Toggler_M;
