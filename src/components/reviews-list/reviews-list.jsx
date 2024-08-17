import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import { ReviewLink } from "../review-link/review-link";
import styles from "./styles.module.css";

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
          <ReviewLink id={id} />
        </li>
      ))}
    </ul>
  );
};
