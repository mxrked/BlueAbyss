import { useEffect } from "react";

import ClearOverflowSS from "./ClearOverflowSS";
import DeactivateAOSItems from "./DeactivateAOSItems";
import HidePageLoader from "./HidePageLoader";

import PageLoader from "../../components/js/PageLoader";
import WhiteOverlay from "../../components/js/WhiteOverlay";
import Nav from "../../components/nav/Nav";
import Menu from "../../components/nav/nav_cnt/menu/Menu";
import Search from "../../components/nav/nav_cnt/search/Search";
import BackToTop from "../../components/js/BackToTop";

import "aos";
import Aos from "aos";

const OnAllPages = () => {
  //? Initialize AOS Library
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  return (
    <div id="onAllPages">
      <ClearOverflowSS />
      <DeactivateAOSItems />

      <WhiteOverlay />
      <PageLoader />
      <HidePageLoader />
      <BackToTop />

      <Nav />
      <Menu />
      <Search />
    </div>
  );
};

export default OnAllPages;
