import { UserButton } from "../login-button/login-button";
import { ThemeButton } from "../theme-button/theme-button";
import styles from "./styles.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <ThemeButton />
      <UserButton />
      <h1 className={styles.headerH1}>Restaurants</h1>
      <div className={styles.link}>
        <a href="/home-page">Home-page</a>
        <a href="/restaurants">Restaurants</a>
        <a href="/dish">Dishes</a>
      </div>
    </div>
  );
};
