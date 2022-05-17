import React, { useState, useEffect } from "react";
import styles from "./Asia.module.css";

export default function Asia() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://bobbykjh.github.io/json/asia.json")
      .then((response) => response.json())
      .then((json) => {
        setList(json.data);
        console.log(json.data);
      });
  }, []);

  return (
    <div className={styles.list}>
      {list.map((flag) => (
        <div key={flag.country_nm} className={styles.total}>
          <img src={flag.download_url} alt={flag.country_nm} />
          <p>{flag.country_nm}</p>
        </div>
      ))}
    </div>
  );
}
