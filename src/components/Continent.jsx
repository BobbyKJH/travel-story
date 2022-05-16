import React from "react";
import { Link } from "react-router-dom";
import styles from "./Continent.module.css";

export default function Continent({ name, color }) {
  return (
    <Link to="/" className={styles.box} style={{ backgroundColor: color }}>
      <div className={styles.whiteBox}>
        <p>{name}</p>
      </div>
    </Link>
  );
}
