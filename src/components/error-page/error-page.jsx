import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import styles from "./styles.module.css";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.text}>
        <h3>Not Found</h3>
        <h4>Back:</h4>
        <a href="/home-page">Home-page</a>
        <a href="/restaurants">Restaurants</a>
      </div>
      <Footer />
    </div>
  );
};
