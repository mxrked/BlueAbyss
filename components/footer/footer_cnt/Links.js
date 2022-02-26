import Link from "next/link";
import { Component } from "react";

import styles from "../../../styles/layout/footer/Footer.module.css";

class Links extends Component {
  constructor(props) {
    super(props);

    this.createLink = this.createLink.bind(this);
  }

  createLink(props) {
    return (
      <li>
        <Link href={"/next-projects/blueabyss/" + props.linkHREF}>
          <a className="page-transition">{props.linkTXT}</a>
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div id={styles.links}>
        <div className={styles.links_set}>
          <h3>Views</h3>

          <ul>
            <li>
              <Link href={`/next-projects/blueabyss/`}>
                <a className="page-transition">Home</a>
              </Link>
            </li>
            <this.createLink linkHREF="info" linkTXT="Background" />
            <this.createLink linkHREF="support" linkTXT="Get Support" />
            <this.createLink linkHREF="policies" linkTXT="Current Policies" />
          </ul>
        </div>
        <div className={styles.links_set}>
          <h3>Galleries</h3>

          <ul>
            <this.createLink linkHREF="galleries/aquatic" linkTXT="Aquatic" />
            <this.createLink
              linkHREF="galleries/cephalopod"
              linkTXT="Cephalopod"
            />
            <this.createLink
              linkHREF="galleries/crustacean"
              linkTXT="Crustacean"
            />
            <this.createLink linkHREF="galleries/mammal" linkTXT="Mammal" />
          </ul>
        </div>
      </div>
    );
  }
}

export default Links;
