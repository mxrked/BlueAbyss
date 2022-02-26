import { Component } from "react";
import { BackgroundImage } from "react-image-and-background-image-fade";
import {
  AQUATIC_A1,
  AQUATIC_A2,
  AQUATIC_A3,
  AQUATIC_A4,
} from "../../../assets/imgs/GALLERIES";

import styles from "../../../styles/views/galleries/Galleries.module.css";

class Modals extends Component {
  constructor(props) {
    super(props);

    this.createModal = this.createModal.bind(this);
  }

  createModal(props) {
    return (
      <div id={props.modalID} className={`${styles.modal} modal`}>
        <div className={styles.modal_cnt}>
          <button
            className={`${styles.modal_closer} modal-closer page-transition`}
            onClick={() => {
              document.querySelectorAll(".modal").forEach((modal) => {
                document.body.style.overflowY = "auto";
                modal.style.display = "none";
                document.querySelector(".modals").style.display = "none";
              });
            }}
          >
            Close
          </button>

          <div className={styles.modal_bg_holder}>
            <BackgroundImage
              src={props.modalSRC}
              width="100%"
              height="100%"
              className={styles.modal_bg}
            />
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.modals} className="modals">
        <this.createModal modalID="A1" modalSRC={AQUATIC_A1} />
        <this.createModal modalID="A2" modalSRC={AQUATIC_A2} />
        <this.createModal modalID="A3" modalSRC={AQUATIC_A3} />
        <this.createModal modalID="A4" modalSRC={AQUATIC_A4} />
      </div>
    );
  }
}

export default Modals;