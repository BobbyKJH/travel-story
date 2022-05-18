import React, { useState } from "react";
import styles from "./Selected.module.css";

export default function Selected({ country_nm, download_url }) {
  const [color, setColor] = useState("#fff");

  const background = () => {
    if (color === "#fff") {
      setColor("#000");
    } else {
      setColor("#fff");
    }
  };
  return (
    <div
      key={country_nm}
      className={styles.total}
      style={{ backgroundColor: color }}
      onClick={background}
    >
      <img src={download_url} alt={country_nm} />
      <p>{country_nm}</p>
    </div>
  );
}
