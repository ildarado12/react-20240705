import { useDispatch, useSelector } from "react-redux";
import {
  selectRequestStatus,
  selectRestaurantsIds,
} from "../../redux/entities/restaurant";
import { RestaurantLink } from "../restautant-link/restaurant-link";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/get-restaurants";
import styles from "./styles.module.css";

export const RestaurantsList = () => {
  const ids = useSelector(selectRestaurantsIds);
  const requestStatus = useSelector(selectRequestStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

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
