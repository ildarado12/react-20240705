import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const RestaurantLink = ({ id }) => {
  const { name } =
    useSelector((state) => selectRestaurantById(state, id)) || {};

  if (!name) {
    return null;
  }

  return (
    <Link className={styles.restaurant} to={id}>
      <h2>{name}</h2>
    </Link>
  );
};
