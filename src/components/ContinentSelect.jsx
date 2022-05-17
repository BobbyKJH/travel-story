import React from "react";
import styles from "./ContinentSelect.module.css";
import Continent from "./Continent";
import { Link } from "react-router-dom";

export default function ContinentSelect() {
  return (
    <div>
      <div className={styles.sortation}>
        <Link to="/signup" className={styles.link}>
          <Continent name={"Europe"} color={"#007fff"} />
        </Link>
        <Link to="/" className={styles.link}>
          <Continent name={"Africa"} color={"#000"} />
        </Link>
        <Link to="/" className={styles.link}>
          <Continent name={"America"} color={"#ff0000"} />
        </Link>
      </div>

      <div className={styles.sortation}>
        <Link to="/" className={styles.link}>
          <Continent name={"Asia"} color={"#efcc00"} />
        </Link>
        <Link to="/" className={styles.link}>
          <Continent name={"Oceania"} color={"#00a877"} />
        </Link>
      </div>
    </div>
  );
}
