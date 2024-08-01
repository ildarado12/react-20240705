import { Layout } from "./layout/layout";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab";
import { ThemeContextProvider } from "./theme-context/context";
import { UserContextProvider } from "./login-context/context";
import "./app.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { RestaurantsList } from "./restaurants-list/restaurants-list";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantTab />
            <RestaurantsList />
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  );
};
