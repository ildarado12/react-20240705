import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import { Review } from "../review/review";
import styles from "./styles.module.css";
import classNames from "classnames";
import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { useUser } from "../login-context/context";

export const Restaurant = ({ id }) => {
  const { value } = useUser();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu: menuIds, reviews: reviewsIds } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2 className={styles.nameRest}>"{name}"</h2>
      <h3>Menu:</h3>
      {menuIds?.length ? (
        <ul>
          {menuIds.map((menuId) => {
            return (
              <li
                className={classNames(styles.card, styles.review)}
                key={menuId}
              >
                <Menu id={menuId} />
              </li>
            );
          })}
        </ul>
      ) : null}
      <h3>Reviews:</h3>
      {reviewsIds?.length ? (
        <ul>
          {reviewsIds.map((reviewId) => {
            return (
              <li
                className={classNames(styles.card, styles.review)}
                key={reviewId}
              >
                <Review id={reviewId} />
              </li>
            );
          })}
        </ul>
      ) : null}
      {value === "Login" ? null : <ReviewForm />}
    </div>
  );
};
