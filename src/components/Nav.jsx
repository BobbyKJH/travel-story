import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={styles.box}>
      {/* 1 */}
      <Link to="/" className={styles.homeLink}>
        여행
      </Link>
      {/* 2 */}
      <Link to="/" className={styles.pageLink}>
        대륙 선택
      </Link>
      {/* 3 */}
      <Link to="/" className={styles.pageLink}>
        여행 계획
      </Link>
      {/* 4 */}
      <Link to="/" className={styles.pageLink}>
        여행추천
      </Link>
      {/* 5 */}
      <Link to="/exchange" className={styles.pageLink}>
        환율 계산기
      </Link>
      {/* 6 */}
      <div className={styles.sign}>
        <Link to="/signin" className={styles.signLink}>
          로그인
        </Link>
        <hr />
        <Link to="/" className={styles.signLink}>
          회원가입
        </Link>
      </div>
    </div>
  );
}
