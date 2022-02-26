import { Component } from "react";
import Link from "next/link";

import { BackgroundImage } from "react-image-and-background-image-fade";

import { INDEX_Policies, INDEX_Support } from "../../assets/imgs/INDEX";

import styles from "../../styles/views/home/Home.module.css";

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.createFeedback = this.createFeedback.bind(this);
  }

  createFeedback(props) {
    return (
      <Link href={props.feedbackLINK}>
        <div className={styles.feedback_cnt}>
          <BackgroundImage
            src={props.feedbackBG}
            width="100%"
            height="100%"
            className={`${styles.feedback_bg} page-transition`}
          ></BackgroundImage>
          <div className="page-transition">
            <span>{props.feedbackSPAN}</span>
          </div>
        </div>
      </Link>
    );
  }

  render() {
    return (
      <div id={styles.feedback}>
        <div
          className={`${styles.feedback_box} container-fluid AOS_Item`}
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="700"
        >
          <div className={`${styles.feedback_row} row`}>
            <div
              className={`${styles.feedback_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <this.createFeedback
                feedbackLINK="/next-projects/blueabyss/support"
                feedbackBG={INDEX_Support}
                feedbackSPAN="Get Support"
              />
            </div>
            <div
              className={`${styles.feedback_side} col-lg-6 col-md-6 col-sm-6 col-xs-12`}
            >
              <this.createFeedback
                feedbackLINK="/next-projects/blueabyss/policies"
                feedbackBG={INDEX_Policies}
                feedbackSPAN="Our Policies"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
