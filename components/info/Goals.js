import { Component } from "react";

import { BackgroundImage } from "react-image-and-background-image-fade";
import { INFO_Goal_1, INFO_Goal_2, INFO_Goal_3 } from "../../assets/imgs/INFO";

import styles from "../../styles/views/info/Info.module.css";

class Goals extends Component {
  constructor(props) {
    super(props);

    this.createGoal = this.createGoal.bind(this);
  }

  createGoal(props) {
    return (
      <div
        className={`${styles.goal} row AOS_Item`}
        data-aos={props.AOS}
        data-aos-delay="800"
        data-aos-duration="700"
      >
        <div
          className={`${styles.goal_side} ${styles.goal_bg_side} col-lg-4 col-md-4 col-sm-3 col-xs-12`}
        >
          <div className={`${styles.goal_bg_holder} page-transition`}>
            <BackgroundImage
              src={props.goalSRC}
              width="100%"
              height="100%"
              className={styles.goal_bg}
            />
          </div>
        </div>
        <div
          className={`${styles.goal_side} ${styles.goal_text_side} col-lg-8 col-md-8 col-sm-9 col-xs-12`}
        >
          <div className={styles.goal_text}>
            <h3 className="page-transition">Goal {props.goalNUM}</h3>

            <p className="page-transition">{props.goalP}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.goals}>
        <div className={`${styles.goals_cnt} container-fluid`}>
          <this.createGoal
            AOS="fade-left"
            goalSRC={INFO_Goal_1}
            goalNUM="1"
            goalP="Allow anyone and everyone to view the beauty of the sea."
          />
          <this.createGoal
            AOS="fade-right"
            goalSRC={INFO_Goal_2}
            goalNUM="2"
            goalP="Help save and protect endangered ocean species."
          />
          <this.createGoal
            AOS="fade-left"
            goalSRC={INFO_Goal_3}
            goalNUM="3"
            goalP="Care and provide for all things that live in the sea."
          />
        </div>
      </div>
    );
  }
}

export default Goals;
