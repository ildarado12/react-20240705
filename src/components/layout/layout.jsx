import { Outlet } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { Cart } from "../cart/cart";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};
