import React from "react";
import styles from "./ContinentSelect.module.css";
import OlympicFlag from "./OlympicFlag";
import { Link } from "react-router-dom";

export default function ContinentSelect() {
  return (
    <div>
      <div className={styles.sortation}>
        <Link to="/eu" className={styles.link}>
          <OlympicFlag name={"Europe"} color={"#007fff"} />
        </Link>
        <Link to="/africa" className={styles.link}>
          <OlympicFlag name={"Africa"} color={"#000"} />
        </Link>
        <Link to="/america" className={styles.link}>
          <OlympicFlag name={"America"} color={"#ff0000"} />
        </Link>
      </div>

      <div className={styles.sortation}>
        <Link to="/asia" className={styles.link}>
          <OlympicFlag name={"Asia"} color={"#efcc00"} />
        </Link>
        <Link to="/oceania" className={styles.link}>
          <OlympicFlag name={"Oceania"} color={"#00a877"} />
        </Link>
      </div>
    </div>
  );
}
