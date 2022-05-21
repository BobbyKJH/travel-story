// 대륙 지도
import React, { useState } from "react";
import ContinentMap from "./ContinentMap";
import styles from "./Location.module.css";
import Eu from "../../image/유럽.gif";
import Asia from "../../image/아시아.gif";
import Africa from "../../image/아프리카.gif";
import Oceania from "../../image/오세아니아.gif";
import NorthAmerica from "../../image/북미.gif";
import SouthAmerica from "../../image/남미.gif";

export default function Location() {
  const [europe, setEurope] = useState(false);
  const [asia, setAsia] = useState(false);
  const [africa, setAfrica] = useState(false);
  const [oceania, setOceania] = useState(false);
  const [america, setAmerica] = useState(true);

  const EU = () => {
    if (europe === true) {
      setEurope(false);
    } else {
      setEurope(true);
    }
  };
  return (
    <div className={styles.box}>
      <div className={styles.btnBox}>
        <button className={styles.btn} onClick={EU}>
          유럽
        </button>
        <button className={styles.btn}>아시아</button>
        <button className={styles.btn}>아프리카</button>
        <button className={styles.btn}>오세아니아</button>
        <button className={styles.btn}>아메리카</button>
      </div>
      {europe && <ContinentMap src={Eu} />}
      {asia && <ContinentMap src={Asia} />}
      {africa && <ContinentMap src={Africa} />}
      {oceania && <ContinentMap src={Oceania} />}
      {america && <ContinentMap src={NorthAmerica} />}
      {america && <ContinentMap src={SouthAmerica} />}

      {}
    </div>
  );
}
