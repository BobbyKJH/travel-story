import React, { useState, useEffect, useRef } from "react";
import styles from "./SignUp.module.css";

export default function SignUp() {
  // 아이디 만들기
  const [id, setId] = useState("");
  const [idError, setIdError] = useState("");
  // 비밀번호 만들기
  const [password1, setPassword1] = useState("");
  const [passwordError1, setPasswordError1] = useState("");
  // 비밀번호 확인
  const [password2, setPassword2] = useState("");
  const [passwordError2, setPasswordError2] = useState("");

  const refId = useRef();
  const refPassword = useRef();

  useEffect(() => {
    refId.current.focus();
  });

  // id onChange
  const ID = (e) => {
    setId(e.target.value);
    if (id.length < 7) {
      setIdError("아이디를 8자리 이상 입력해주세요.");
    } else {
      setIdError("");
    }
  };
  // password1 onChange
  const PW = (e) => {
    setPassword1(e.target.value);
    if (password1.length < 8) {
      setPasswordError1("비밀번호를 8자리 이상 입력해주세요.");
    } else {
      setPasswordError1("");
    }
  };
  // password2 onChange
  const PWCheck = (e) => {
    setPassword2(e.target.value);
    if (password1 === password2) {
      setPasswordError2("비밀번호가 일치합니다");
    } else {
      setPasswordError2("비밀번호가 일치하지 않습니다.");
    }
  };
  return (
    <div className={styles.box}>
      <h2>회원가입</h2>
      {/* 아이디 생성 */}
      <input
        type="text"
        className={styles.input}
        placeholder="아이디를 입력해주세요."
        onChange={ID}
        value={id}
        ref={refId}
      />
      <p>{idError}</p>

      {/* 비밀번호 생성 */}
      <input
        type="text"
        className={styles.input}
        placeholder="비밀번호를 입력해주세요."
        onChange={PW}
        value={password1}
      />
      <p>{passwordError1}</p>

      {/* 비밀번호 확인 */}
      <input
        type="text"
        className={styles.input}
        placeholder="비밀번호를 다시 한번 입력해주세요."
        onChange={PWCheck}
        value={password2}
      />
      <p>{passwordError2}</p>

      {/* 전화번호 입력 */}
      <input type="text" className={styles.input} />
    </div>
  );
}
