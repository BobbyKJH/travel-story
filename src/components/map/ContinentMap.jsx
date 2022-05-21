import React from "react";
import styles from "./ContinentMap.module.css";

export default function ContinentMap({ src }) {
  return (
    <div className={styles.box}>
      <img className={styles.img} src={src} />
    </div>
  );
}
