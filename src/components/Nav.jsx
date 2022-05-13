import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.box}>
      <Link to="/" className={styles.homeLink}>
        여행
      </Link>
      <Link to="/" className={styles.pageLink}>
        대륙 선택
      </Link>
      <Link to="/" className={styles.pageLink}>
        환율 보기
      </Link>
      <Link to="/" className={styles.pageLink}>
        여행 계획
      </Link>
      <div className={styles.sign}>
        <Link to="/1" className={styles.signLink}>
          로그인
        </Link>
        <br />
        <Link to="/" className={styles.signLink}>
          회원가입
        </Link>
      </div>
    </div>
  );
}
