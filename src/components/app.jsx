import { Layout } from "./layout/layout";
import { ThemeContextProvider } from "./theme-context/context";
import { UserContextProvider } from "./login-context/context";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { RestaurantsList } from "./restaurants-list/restaurants-list";
import { Cart } from "./cart/cart";

export const App = () => {
  return (
    <Provider store={store} stabilityCheck="never">
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantsList />
            <Cart />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
