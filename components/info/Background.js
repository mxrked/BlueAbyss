import { BackgroundImage } from "react-image-and-background-image-fade";

import { INFO_Background } from "../../assets/imgs/INFO";

import styles from "../../styles/views/info/Info.module.css";

const Background = () => {
  return (
    <div id={styles.background}>
      <a id="background" />
      <div className={`${styles.background_box} container-fluid`}>
        <div className={`${styles.background_row} row`}>
          <div
            className={`${styles.background_side} col-lg-7 col-md-7 col-sm-7 col-xs-12 order-lg-0 order-md-0 order-sm-1 order-xs-1 AOS_Item`}
            id={styles.backgroundL}
            data-aos="fade-right"
            data-aos-delay="800"
            data-aos-duration="700"
          >
            <div className={styles.background_side_cnt}>
              <div className={styles.background_side_cnt_text}>
                <h2 className="page-transition">
                  Our <br /> Background.
                </h2>

                <p className="page-transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className="page-transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.background_side} col-lg-5 col-md-5 col-sm-5 col-xs-12 order-lg-1 order-md-1 order-sm-0 order-xs-0 AOS_Item`}
            id={styles.backgroundR}
            data-aos="fade-left"
            data-aos-delay="800"
            data-aos-duration="700"
          >
            <div className={styles.background_side_cnt}>
              <BackgroundImage
                src={INFO_Background}
                width="100%"
                height="100%"
                className={styles.background_side_bg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
