import { MdSend } from "react-icons/md";

import styles from "../../../styles/layout/footer/Footer.module.css";

const Newsletter = () => {
  return (
    <div id={styles.newsletter}>
      <h3>Sign up for emails.</h3>

      <div>
        <input
          type="text"
          autoComplete="off"
          placeholder="Your Email"
          className="page-transition"
        />

        <button className="page-transition">
          <MdSend />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
