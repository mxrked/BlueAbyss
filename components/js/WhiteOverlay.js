import styles from "../../styles/js/JS.module.css";

// This will be used to prevent content flashing if the user has not seen the page loader yet
const WhiteOverlay = () => {
  return <div id="whiteOverlay" className={styles.white_overlay} />;
};

export default WhiteOverlay;
