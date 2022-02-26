import { Component } from "react";
import { BackgroundImage } from "react-image-and-background-image-fade";
import {
  CRUSTACEAN_A1,
  CRUSTACEAN_A2,
  CRUSTACEAN_A3,
  CRUSTACEAN_A4,
} from "../../../assets/imgs/GALLERIES";

import styles from "../../../styles/views/galleries/Galleries.module.css";

class Togglers extends Component {
  constructor(props) {
    super(props);
  }

  toggleModal(modal) {
    if (process.browser) {
      document.body.style.overflowY = "hidden";
      document.querySelector(".modals").style.display = "block";
      document.getElementById(modal).style.display = "grid";
    }
  }

  render() {
    return (
      <div id={styles.togglers}>
        <div className={`${styles.togglers_box} container-fluid`}>
          <div className={`${styles.togglers_row} row`}>
            <div
              className={`${styles.modal_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <BackgroundImage
                src={CRUSTACEAN_A1}
                width="100%"
                height="100%"
                className={styles.modal_toggler_bg}
              >
                <button
                  className={`${styles.modal_toggler_btn} page-transition`}
                  onClick={() => {
                    this.toggleModal("A1");
                  }}
                >
                  <span className="page-transition">View</span>
                </button>
              </BackgroundImage>
            </div>
            <div
              className={`${styles.modal_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <BackgroundImage
                src={CRUSTACEAN_A2}
                width="100%"
                height="100%"
                className={styles.modal_toggler_bg}
              >
                <button
                  className={`${styles.modal_toggler_btn} page-transition`}
                  onClick={() => {
                    this.toggleModal("A2");
                  }}
                >
                  <span className="page-transition">View</span>
                </button>
              </BackgroundImage>
            </div>
            <div
              className={`${styles.modal_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <BackgroundImage
                src={CRUSTACEAN_A3}
                width="100%"
                height="100%"
                className={styles.modal_toggler_bg}
              >
                <button
                  className={`${styles.modal_toggler_btn} page-transition`}
                  onClick={() => {
                    this.toggleModal("A3");
                  }}
                >
                  <span className="page-transition">View</span>
                </button>
              </BackgroundImage>
            </div>
            <div
              className={`${styles.modal_toggler} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <BackgroundImage
                src={CRUSTACEAN_A4}
                width="100%"
                height="100%"
                className={styles.modal_toggler_bg}
              >
                <button
                  className={`${styles.modal_toggler_btn} page-transition`}
                  onClick={() => {
                    this.toggleModal("A4");
                  }}
                >
                  <span className="page-transition">View</span>
                </button>
              </BackgroundImage>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Togglers;
