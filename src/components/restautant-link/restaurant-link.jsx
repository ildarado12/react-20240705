import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const RestaurantLink = ({ id }) => {
  const { name } =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <NavLink className={styles.restaurant} to={id}>
      <h2>{name}</h2>
    </NavLink>
  );
};
