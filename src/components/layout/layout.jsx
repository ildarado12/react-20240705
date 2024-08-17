import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Cart } from "../cart/cart";
import styles from "./styles.module.css";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Cart />
      <a href="/home-page" className={styles.a}>
        Home-page
      </a>
      <a href="/restaurants" className={styles.a}>
        Restaurants
      </a>
      <Footer />
    </div>
  );
};
