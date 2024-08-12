import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import { Review } from "../review/review";
import styles from "./styles.module.css";
import classNames from "classnames";
import { Menu } from "../menu/menu";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu: menuIds, reviews: reviewsIds } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2 className={styles.nameRest}>"{name}"</h2>
      <h3>Reviews:</h3>
      {reviewsIds?.length ? (
        <ul>
          {reviewsIds.map((reviewId) => {
            return (
              <li className={classNames(styles.card, styles.review)}>
                <Review id={reviewId} />
              </li>
            );
          })}
        </ul>
      ) : null}
      <h3>Menu:</h3>
      {menuIds?.length ? (
        <ul>
          {menuIds.map((menuId) => {
            return (
              <li className={classNames(styles.card, styles.review)}>
                <Menu id={menuId} />
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
