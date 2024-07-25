import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import styles from "./styles.module.css";
import { Button } from "../button/button";

export const RestaurantTab = () => {
  const [activeRestId, setActiveRestId] = useState(restaurants[0].id);

  const activeRest = restaurants.find((item) => item.id === activeRestId);

  return (
    <div>
      <ul className={styles.restaurants}>
        {restaurants.map(({ id, name }) => (
          <li className={styles.restauranttab}>
            <Button
              viewVariant="large"
              text={name}
              onClick={() => setActiveRestId(id)}
              disabled={id === activeRestId}
            />
          </li>
        ))}
      </ul>
      {activeRest && (
        <Restaurant
          name={activeRest.name}
          menu={activeRest.menu}
          reviews={activeRest.reviews}
        />
      )}
    </div>
  );
};
