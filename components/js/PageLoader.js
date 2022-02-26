import { useEffect } from "react";
import styles from "../../styles/js/JS.module.css";

const PageLoader = () => {
  useEffect(() => {
    // Hiding Content for after page loader loads

    if (!sessionStorage.getItem("Page Loader Finished")) {
      document.getElementById("pageLoader").style.display = "grid";
    }

    window.addEventListener("load", () => {
      setTimeout(() => {
        // Get rid of the page loader cnt and white overlay behind the page loader
        document.getElementById("pageLoaderCnt").classList.toggle("deactive");
        document.getElementById("whiteOverlay").style.display = "none";
      }, 1000);

      setTimeout(() => {
        document.getElementById("pageLoader").classList.toggle("deactive");

        if (!sessionStorage.getItem("Page Loader Finished")) {
          sessionStorage.setItem("Page Loader Finished", true);
        }
      }, 1300);
    });
  }, []);

  return (
    <div id="pageLoader" className={`${styles.page_loader} full-second`}>
      <div
        className={`${styles.page_loader_cnt} page-transition`}
        id="pageLoaderCnt"
      >
        <h1>Blue Abyss</h1>

        <div className={styles.page_loader_spinner_holder}>
          <div>
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
