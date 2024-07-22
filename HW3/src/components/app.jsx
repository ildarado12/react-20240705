import { Layout } from "./layout/layout";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab";
import "./app.css";

export const App = () => {
  return (
    <div>
      <Layout>
        <RestaurantTab />
      </Layout>
    </div>
  );
};
