import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";

import styles from "../../../../styles/layout/nav/Nav.module.css";

const Toggler_S = () => {
  useEffect(() => {
    document.getElementById("searchToggler").addEventListener("click", () => {
      //* This will disable vertical scrolling
      sessionStorage.setItem("Search Toggled", true);
      setTimeout(() => {
        if (sessionStorage.getItem("Search Toggled")) {
          document.body.style.overflowY = "hidden";
        }
      }, 10);
    });
  }, []);

  useEffect(() => {
    const SEARCH = document.getElementById("search");
    const SEARCH_CNT = document.getElementById("searchCnt");

    document.getElementById("searchToggler").addEventListener("click", () => {
      SEARCH.style.display = "grid";
      SEARCH_CNT.style.display = "block";

      setTimeout(() => {
        SEARCH.classList.remove("deactive");
      }, 500);

      setTimeout(() => {
        SEARCH_CNT.style.transform = "translateY(0)";
        SEARCH_CNT.classList.remove("deactive");
      }, 1000);

      setTimeout(() => {
        SEARCH_CNT.style.pointerEvents = "auto";
      }, 1200);
    });
  }, []);

  return (
    <button
      id="searchToggler"
      className={`${styles.search_toggler} page-transition`}
    >
      <FaSearch />
    </button>
  );
};

export default Toggler_S;
