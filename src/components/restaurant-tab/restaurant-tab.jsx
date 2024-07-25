import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Restaurant } from "../restaurant/restaurant";
import styles from "./styles.module.css";

export const RestaurantTab = () => {
  const [activeRestId, setActiveRestId] = useState(restaurants[0].id);

  const activeRest = restaurants.find((item) => item.id === activeRestId);

  return (
    <div>
      <ul className={styles.restaurants}>
        {restaurants.map(({ id, name }) => (
          <li className={styles.restauranttab}>
            <button
              className={styles.button}
              onClick={() => setActiveRestId(id)}
              disabled={id === activeRestId}
            >
              {name}
            </button>
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
