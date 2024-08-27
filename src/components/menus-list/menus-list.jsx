import { useSelector } from "react-redux";
import { MenuLink } from "../menu-link/menu-link";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import styles from "./styles.module.css";

export const MenusList = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { menu: menuIds } = restaurant || {};

  if (!menuIds.length) {
    return null;
  }

  return (
    <ul className={styles.menuList}>
      {menuIds.map((id) => (
        <li className={styles.menu} key={id}>
          <MenuLink id={id} />
        </li>
      ))}
    </ul>
  );
};
