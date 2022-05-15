import React from "react";
import Nav from "../components/Nav";
import SignIn from "../components/SignIn";
import styles from "./SignInPage.module.css";

export default function SignInPage() {
  return (
    <>
      <Nav />
      <div className={styles.signBox}>
        <SignIn />
      </div>
    </>
  );
}
