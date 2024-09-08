import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant";
import { RestaurantLink } from "../restautant-link/restaurant-link";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";
import { useRequest } from "../../hooks/use-request";
import styles from "./styles.module.css";

export const RestaurantsList = () => {
  const ids = useSelector(selectRestaurantsIds);
  const requestStatus = useRequest(getRestaurants);

  if (requestStatus === `pending`) {
    return <div>...loading</div>;
  }

  if (requestStatus === `rejected`) {
    return <div>error</div>;
  }

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
