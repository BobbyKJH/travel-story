import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

export default function SignIn() {
  // Id Hook
  const [id, setId] = useState("");
  // Password Hook
  const [password, setPassword] = useState("");
  const idRef = useRef();

  useEffect(() => {
    idRef.current.focus();
  }, []);

  // 아이디 입력
  const ID = (e) => {
    setId(e.target.value);
  };

  // 비밀번호 입려
  const PW = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitChange = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.box} onSubmit={onSubmitChange}>
      <h1>TravelDiary</h1>

      <hr />

      {/* 아이디 입력 */}
      <div className={styles.inputBox}>
        <input
          type="text"
          value={id}
          onChange={ID}
          ref={idRef}
          className={styles.input}
          placeholder="아이디를 입력해주세요."
        />
        {/* 패스워드 입력 */}
        <input
          type="password"
          value={password}
          onChange={PW}
          className={styles.input}
          placeholder="비밀번호를 입력해주세요."
        />
        {/* 버튼 */}
        <button className={styles.btn} type="submit">
          로그인
        </button>
      </div>

      <hr />
      <div className={styles.joinBox}>
        <Link to="/">회원가입</Link>
        <hr />
        <Link to="/">아이디 찾기</Link>
        <hr />
        <Link to="/">비밀번호 찾기</Link>
      </div>
    </form>
  );
}
