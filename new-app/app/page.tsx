import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
      <h1 className={styles.h1}>Hello Everyone!</h1>
      <p>This is a new WeatherApp!</p>
    </div>
  );
}