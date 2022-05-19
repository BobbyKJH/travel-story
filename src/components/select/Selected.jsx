import React, { useState, useRef } from "react";
import styles from "./Selected.module.css";

export default function Selected({ country_nm, download_url }) {
  const [color, setColor] = useState("#fff");
  const [font, setFont] = useState("#000");
  const totalRef = useRef(null);

  const background = () => {
    if (color === "#fff") {
      setColor("#000");
      setFont("#fff");
      totalRef.current.classList.add("list");
    } else {
      setColor("#fff");
      setFont("#000");
      totalRef.current.classList.remove("list");
    }
  };

  return (
    <div
      key={country_nm}
      className={styles.total}
      style={{ backgroundColor: color, color: font }}
      ref={totalRef}
      onClick={background}
    >
      <img src={download_url} alt={country_nm} />
      <p>{country_nm}</p>
    </div>
  );
}
