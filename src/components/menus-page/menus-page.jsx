import { Outlet } from "react-router-dom";
import { MenusList } from "../menus-list/menus-list";

export const MenusPage = ({ id }) => {
  return (
    <div>
      <MenusList id={id} />
      <Outlet />
    </div>
  );
};
