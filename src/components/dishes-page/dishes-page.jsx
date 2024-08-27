import { Outlet } from "react-router-dom";
import { DishesList } from "../dishes-list/dishes-list";

export const DishesPage = () => {
  return (
    <div>
      <DishesList />
      <Outlet />
    </div>
  );
};
