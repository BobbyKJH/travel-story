import React from "react";
import styles from "./OlympicFlag.module.css";

export default function OlympicFlag({ name, color }) {
  return (
    <div className={styles.box} style={{ backgroundColor: color }}>
      <div className={styles.whiteBox}>
        <p>{name}</p>
      </div>
    </div>
  );
}
