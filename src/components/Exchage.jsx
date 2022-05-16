import React, { useState, useEffect, useRef } from "react";
import styles from "./Exchange.module.css";

export default function Exchage() {
  // ExChange List
  const [list, setList] = useState([]);
  const [num, setNum] = useState("1");
  const [selected, setSelected] = useState("");
  const refNum = useRef();

  // 금액 입력 함수
  const changeEnteredNum = (e) => {
    const value = e.target.value;
    setNum(value);
    if (num < 1) {
      setNum(1);
    }
    if (num >= 1) {
      setNum(e.target.value);
    }
    if (selected === "") {
      alert("화페를 선택해주세요.");
      setNum(1);
    }
  };
  // 금액 처음 포커스
  useEffect(() => {
    refNum.current.focus();
  }, [selected]);
  // 금액 선택 select
  const onSelected = (e) => {
    setSelected(e.target.value);
  };

  // 계산된 금액 천의 자리수 "," 찍어주는 함수
  function numberWithCommas(num) {
    return num
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // 환율관련된 API를 불러온다.
  useEffect(() => {
    fetch("https://bobbykjh.github.io/exchange.json")
      .then((response) => response.json())
      .then((json) => {
        // let js = new Object(json);
        setList(json.리스트);
        console.log(json.리스트);
      });
  }, []);

  return (
    <div className={styles.box}>
      {/* 이름 */}
      <h2 className={styles.exchange}>환율 계산기</h2>

      {/* 환율 기준표 */}
      <select className={styles.select} value={selected} onChange={onSelected}>
        {list.map((money) => (
          <option value={money.매매기준율} key={money.id}>
            {money.통화명} ({money.기호})
          </option>
        ))}
      </select>

      {/* 계산한 값 */}
      <p className={styles.total}>
        {numberWithCommas(selected * num)}
        <span>원</span>
      </p>

      {/* 바꿀 비용 input 창 */}
      <input
        type="number"
        onChange={changeEnteredNum}
        value={num}
        ref={refNum}
      />
    </div>
  );
}
