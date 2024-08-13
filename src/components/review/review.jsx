import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review";
import { User } from "../user/user";
import styles from "./styles.module.css";

export const Review = ({ id }) => {
  const review = useSelector((state) => {
    return selectReviewById(state, id);
  });

  const { userId, text, rating } = review || {};

  if (!text) {
    return null;
  }

  return (
    <div>
      <User id={userId} />
      <span> "{text}"</span>
      <p className={styles.rating}>Rating: {rating}</p>
    </div>
  );
};
