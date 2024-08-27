import { Outlet } from "react-router-dom";
import { RestaurantsList } from "../restaurants-list/restaurants-list";

export const RestaurantsPage = () => {
  return (
    <div>
      <RestaurantsList />
      <Outlet />
    </div>
  );
};
