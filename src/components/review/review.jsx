import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectReviewById } from "../../redux/entities/review";

export const Review = ({ id }) => {
  const review = useSelector((state) => {
    console.log(id);
    selectReviewById(state, id);
  });
  console.log(review);

  const { userId, text, rating } = review || {};

  if (!text) {
    return null;
  }

  return <div>{text}</div>;
};

/* return (
  <div>
    <span className={styles.user}>{userId}</span>:<span> "{text}"</span>
    <p className={styles.rating}>Rating: {rating}</p>
  </div>
);
 */
