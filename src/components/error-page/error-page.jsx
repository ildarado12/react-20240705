import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import styles from "./styles.module.css";

export const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div className={styles.text}>
        <h3>Not Found</h3>
      </div>
      <Footer />
    </div>
  );
};
