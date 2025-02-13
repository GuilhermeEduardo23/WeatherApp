import Search from "./Components/Search/search";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Lisbon</h1>
      <Search />
    </div>
  );
}