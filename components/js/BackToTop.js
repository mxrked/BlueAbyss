import { useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

import styles from "../../styles/js/JS.module.css";

const BackToTop = () => {
  useEffect(() => {
    const B2T = document.getElementById("backToTop");

    function detectB2T() {
      if (window.scrollY <= 340) {
        B2T.style.bottom = "-200px";
      } else {
        B2T.style.bottom = "30px";
      }
    }

    B2T.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });

    window.addEventListener("load", detectB2T);
    window.addEventListener("scroll", detectB2T);
  }, []);

  return (
    <button id="backToTop" className={`${styles.back_to_top} page-transition`}>
      <FaChevronUp />
    </button>
  );
};

export default BackToTop;
