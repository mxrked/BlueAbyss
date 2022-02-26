import Link from "next/link";
import { Component } from "react";
import { BackgroundImage } from "react-image-and-background-image-fade";

import { INDEX_Goal1, INDEX_Goal2, INDEX_Goal3 } from "../../assets/imgs/INDEX";

import styles from "../../styles/views/home/Home.module.css";

class Goals extends Component {
  constructor(props) {
    super(props);

    this.createGoal = this.createGoal.bind(this);
  }

  createGoal(props) {
    return (
      <div className={styles.goals_side_cnt}>
        <div className={styles.goal_bg_holder}>
          <BackgroundImage
            src={props.goalIMG}
            className={styles.goal_bg}
            width="100%"
            height="100%"
          />
        </div>

        <div className={styles.goal_text}>
          <p className="page-transition">{props.goalP}</p>

          <Link href="/next-projects/blueabyss/info">
            <a className="page-transition">Learn</a>
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.goals}>
        <div
          className={`${styles.goals_cnt} AOS_Item`}
          data-aos="fade-left"
          data-aos-delay="800"
          data-aos-duration="700"
        >
          <h2>
            Blue Abyss <br /> Current Goals.
          </h2>

          <div className={`${styles.goals_box} container-fluid`}>
            <div className={`${styles.goals_row} row`}>
              <div
                className={`${styles.goals_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
              >
                <this.createGoal
                  goalIMG={INDEX_Goal1}
                  goalP="Allow anyone and everyone to view the beauty of the sea."
                />
              </div>
              <div
                className={`${styles.goals_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
              >
                <this.createGoal
                  goalIMG={INDEX_Goal2}
                  goalP="Help save and protect endangered ocean species."
                />
              </div>
              <div
                className={`${styles.goals_side} col-lg-4 col-md-4 col-sm-12 col-xs-12`}
              >
                <this.createGoal
                  goalIMG={INDEX_Goal3}
                  goalP="Care and provide for all things that live in the sea."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
