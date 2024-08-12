import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant";
import { Restaurant } from "../restaurant/restaurant";
import styles from "./styles.module.css";

export const RestaurantsList = () => {
  const ids = useSelector(selectRestaurantsIds);

  if (!ids.length) {
    return null;
  }

  return (
    <ul>
      {ids.map((id) => (
        <li className={styles.restaurant} key={id}>
          <Restaurant id={id} />
        </li>
      ))}
    </ul>
  );
};
