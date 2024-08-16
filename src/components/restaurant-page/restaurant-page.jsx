import { useParams } from "react-router-dom";
import { Restaurant } from "../restaurant/restaurant";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return (
    <div>
      <Restaurant id={restaurantId} />
    </div>
  );
};
