import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import styles from "./styles.module.css";
import { Review } from "../review/review";

export const ReviewsList = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { reviews: reviewsIds } = restaurant || {};

  if (!reviewsIds.length) {
    return null;
  }

  return (
    <ul className={styles.reviewList}>
      {reviewsIds.map((id) => (
        <li className={styles.review} key={id}>
          <Review id={id} />
        </li>
      ))}
    </ul>
  );
};
