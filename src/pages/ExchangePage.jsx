import React from "react";
import styles from "./ExchangePage.module.css";
import Exchage from "../components/exchange/Exchage";
import Nav from "../components/Nav";

export default function ExchangePage() {
  return (
    <>
      <Nav />
      <div className={styles.exchange}>
        <Exchage />
      </div>
    </>
  );
}
