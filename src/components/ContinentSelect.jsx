import React from "react";
import styles from "./ContinentSelect.module.css";
import Continent from "./Continent";

export default function ContinentSelect() {
  return (
    <div>
      <div className={styles.sortation}>
        <Continent name={"Europe"} color={"#007fff"} />
        <Continent name={"Africa"} color={"#000"} />
        <Continent name={"America"} color={"#ff0000"} />
      </div>

      <div className={styles.sortation}>
        <Continent name={"Asia"} color={"#efcc00"} />
        <Continent name={"Oceania"} color={"#00a877"} />
      </div>
    </div>
  );
}
