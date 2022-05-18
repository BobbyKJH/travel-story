/* 니리 산텍 map */
import React, { useState, useEffect } from "react";
import styles from "./Continent.module.css";
import Selected from "./select/Selected";

export default function Continent({ link }) {
  const [list, setList] = useState([]);

  const url = link;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setList(json.data);
        console.log(json.data);
      });
  }, [url]);

  return (
    <div className={styles.list}>
      {list.map((flag) => (
        <Selected
          country_nm={flag.country_nm}
          download_url={flag.download_url}
        />
      ))}
    </div>
  );
}
