import { useSelector } from "react-redux";
import { Review } from "../review/review";
import styles from "./styles.module.css";
import classnames from "classnames";
import { selectRestaurantById } from "../../redux/entities/restaurant";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu: menuIds, reviews: reviewsIds } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <div className={classnames(styles.restaurant)}>
      <h2 className={classnames(styles.nameRest)}>"{name}"</h2>
      <h3>Reviews:</h3>
      {reviewsIds?.length ? (
        <ul>
          {reviewsIds.map((text) => {
            <Review id={text} />;
          })}
        </ul>
      ) : null}
    </div>
  );
};

/* 
  return (
    <div className={classnames(styles.restaurant)}>
      <h2 className={classnames(styles.nameRest)}>"{name}"</h2>
      <h3>Menu:</h3>
      {reviewsIds?.length ? (
        <ul>
          {reviewsIds.map((text) => (
            <Review id={id} />
          ))}
        </ul>
      ) : null}

      <h3>Reviews:</h3>
      <ul>
        {reviewsIds.map(({ user, text, rating }) => (
          <li className={classnames(styles.card, styles.review)}>
            <Review user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
}; */
