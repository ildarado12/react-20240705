import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

export const ReviewLink = ({ id }) => {
  const { rating } = useSelector((state) => selectReviewById(state, id)) || {};

  if (!rating) {
    return null;
  }

  return (
    <NavLink className={styles.review} to={id}>
      <h4>rating: {rating}</h4>
    </NavLink>
  );
};
