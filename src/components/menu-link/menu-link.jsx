import { useSelector } from "react-redux";
import { selectDisheById } from "../../redux/entities/dishes";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const MenuLink = ({ id }) => {
  const { name } = useSelector((state) => selectDisheById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <NavLink className={styles.menu} to={id}>
      <h4>{name}</h4>
    </NavLink>
  );
};
