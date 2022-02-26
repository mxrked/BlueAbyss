import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

import {
  ABOUT_KWS,
  AQUATIC_KWS,
  CEPHALOPOD_KWS,
  CRUSTACEAN_KWS,
  HOME_KWS,
  MAMMAL_KWS,
  POLICIES_KWS,
  SUPPORT_KWS,
} from "../../../../assets/arrays/SearchKWS";

import filterSearch from "./functions/filterSearch";

import styles from "../../../../styles/layout/nav/Nav.module.css";

const Search = () => {
  const router = useRouter();
  const env = process.env.NODE_ENV;

  useEffect(() => {
    // Defaults
    const SEARCH = document.getElementById("search");
    const SEARCH_CNT = document.getElementById("searchCnt");

    SEARCH.style.display = "none";
    SEARCH.classList.toggle("deactive");
    SEARCH_CNT.style.display = "none";
    SEARCH_CNT.classList.toggle("deactive");

    // Closing
    function closeSearch() {
      SEARCH_CNT.style.pointerEvents = "none";
      SEARCH_CNT.classList.toggle("deactive");
      SEARCH_CNT.style.transform = "translateY(-40px)";

      // Resets ipt and links
      document.getElementById("searchIpt").value = "";
      document.querySelectorAll("#searchLinks li").forEach((li) => {
        li.style.display = "flex";
      });

      setTimeout(() => {
        SEARCH.classList.toggle("deactive");
      }, 100);

      setTimeout(() => {
        sessionStorage.removeItem("Search Toggled");
        document.body.style.overflowY = "auto";
      }, 250);
    }

    document
      .getElementById("searchCloser")
      .addEventListener("click", closeSearch);
  }, []);

  function developmentRouting() {
    var i;
    const iptVal = document.getElementById("searchIpt").value.toLowerCase();

    for (i = 0; i < HOME_KWS.length; i++) {
      if (iptVal.indexOf(HOME_KWS[i]) > -1) {
        router.push("/");
      }
    }

    for (i = 0; i < ABOUT_KWS.length; i++) {
      if (iptVal.indexOf(ABOUT_KWS[i]) > -1) {
        router.push("/info");
      }
    }

    for (i = 0; i < SUPPORT_KWS.length; i++) {
      if (iptVal.indexOf(SUPPORT_KWS[i]) > -1) {
        router.push("/support");
      }
    }

    for (i = 0; i < POLICIES_KWS.length; i++) {
      if (iptVal.indexOf(POLICIES_KWS[i]) > -1) {
        router.push("/policies");
      }
    }

    for (i = 0; i < AQUATIC_KWS.length; i++) {
      if (iptVal.indexOf(AQUATIC_KWS[i]) > -1) {
        router.push("/galleries/aquatic");
      }
    }

    for (i = 0; i < CEPHALOPOD_KWS.length; i++) {
      if (iptVal.indexOf(CEPHALOPOD_KWS[i]) > -1) {
        router.push("/galleries/cephalopod");
      }
    }

    for (i = 0; i < CRUSTACEAN_KWS.length; i++) {
      if (iptVal.indexOf(CRUSTACEAN_KWS[i]) > -1) {
        router.push("/galleries/crustacean");
      }
    }

    for (i = 0; i < MAMMAL_KWS.length; i++) {
      if (iptVal.indexOf(MAMMAL_KWS[i]) > -1) {
        router.push("/galleries/mammal");
      }
    }
  }

  function productionRouting() {
    var i;
    const iptVal = document.getElementById("searchIpt").value.toLowerCase();

    for (i = 0; i < HOME_KWS.length; i++) {
      if (iptVal.indexOf(HOME_KWS[i]) > -1) {
        router.push("/next-projects/blueabyss/");
      }
    }

    for (i = 0; i < ABOUT_KWS.length; i++) {
      if (iptVal.indexOf(ABOUT_KWS[i]) > -1) {
        router.push("/next-projects/blueabyss/info");
      }
    }

    for (i = 0; i < SUPPORT_KWS.length; i++) {
      if (iptVal.indexOf(SUPPORT_KWS[i]) > -1) {
        router.push("/next-projects/blueabyss/support");
      }
    }

    for (i = 0; i < POLICIES_KWS.length; i++) {
      if (iptVal.indexOf(POLICIES_KWS[i]) > -1) {
        router.push("/next-projects/blueabyss/policies");
      }
    }

    for (i = 0; i < AQUATIC_KWS.length; i++) {
      if (iptVal.indexOf(AQUATIC_KWS[i]) > -1) {
        router.push("/next-projects/blueabyss/galleries/aquatic");
      }
    }

    for (i = 0; i < CEPHALOPOD_KWS.length; i++) {
      if (iptVal.indexOf(CEPHALOPOD_KWS[i]) > -1) {
        router.push("/next-projects/blueabyss/galleries/cephalopod");
      }
    }

    for (i = 0; i < CRUSTACEAN_KWS.length; i++) {
      if (iptVal.indexOf(CRUSTACEAN_KWS[i]) > -1) {
        router.push("/next-projects/blueabyss/galleries/crustacean");
      }
    }

    for (i = 0; i < MAMMAL_KWS.length; i++) {
      if (iptVal.indexOf(MAMMAL_KWS[i]) > -1) {
        router.push("/next-projects/blueabyss/galleries/mammal");
      }
    }
  }

  useEffect(() => {
    document.getElementById("searchIpt").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        if (env == "development") {
          developmentRouting();
        }

        if (env == "production") {
          productionRouting();
        }
      }
    });

    document.getElementById("searchGo").addEventListener("click", () => {
      if (env == "development") {
        developmentRouting();
      }

      if (env == "production") {
        productionRouting();
      }
    });
  }, [router]);

  return (
    <div id="search" className={`${styles.search} full-second`}>
      <div className={`${styles.search_cnt} page-transition`} id="searchCnt">
        <button
          id="searchCloser"
          className={`${styles.search_closer} page-transition`}
        >
          Close <FaTimes />
        </button>

        <div className={styles.search_cnt_main}>
          <div>
            <input
              type="text"
              id="searchIpt"
              className="page-transition"
              placeholder="Search ..."
              autoComplete="off"
              onKeyUp={filterSearch}
            />

            <button
              id="searchGo"
              className={`${styles.search_go} page-transition`}
            >
              <FaSearch />
            </button>
          </div>

          <ul id="searchLinks">
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
  );
};

export default Search;
