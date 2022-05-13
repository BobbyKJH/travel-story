import React, { useState, useEffect } from "react";
import styles from "./Exchange.module.css";

export default function Exchage() {
  // ExChange List
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://bobbykjh.github.io/exchange.json")
      .then((response) => response.json())
      .then((json) => {
        // let js = new Object(json);
        setList(json.리스트);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <select className={styles.select}>
        {list.map((coin) => (
          <option>
            {coin.통화명}: {coin.매매기준율}원
          </option>
        ))}
      </select>
    </div>
  );
}
