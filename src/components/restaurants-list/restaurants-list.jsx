import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant";
import { RestaurantLink } from "../restautant-link/restaurant-link";
import styles from "./styles.module.css";

export const RestaurantsList = () => {
  const ids = useSelector(selectRestaurantsIds);

  if (!ids.length) {
    return null;
  }

  return (
    <ul className={styles.restList}>
      {ids.map((id) => (
        <li className={styles.restaurant} key={id}>
          <RestaurantLink id={id} />
        </li>
      ))}
    </ul>
  );
};
