import styles from "./Home.module.css";
import Asia from "../components/Continent/Asia";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.aaa}>
        <Asia />
      </div>
    </>
  );
}
