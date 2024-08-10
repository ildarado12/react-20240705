import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurant";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantsList = () => {
  const ids = useSelector(selectRestaurantsIds);

  if (!ids.length) {
    return null;
  }

  return (
    <ul>
      {ids.map((id) => (
        <li>
          <Restaurant id={id} />
        </li>
      ))}
    </ul>
  );
};
