import { Layout } from "./layout/layout";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab";
import { ThemeContextProvider } from "./theme-context/context";
import { UserContextProvider } from "./login-context/context";
import "./app.css";

export const App = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantTab />
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  );
};
