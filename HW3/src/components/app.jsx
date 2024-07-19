import { Layout } from "./layout/layout";
import { RestaurantTab } from "./restaurant-tab/restaurant-tab";

export const App = () => {
  return (
    <div>
      <Layout>
        <RestaurantTab />
      </Layout>
    </div>
  );
};
