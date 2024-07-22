import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";
import styles from "./styles.module.css";
import classnames from "classnames";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <div className={classnames(styles.restaurant)}>
      <h2 className={classnames(styles.nameRest)}>"{name}"</h2>
      <h3>Menu:</h3>
      <ul>
        {menu.map(({ name, price, ingredients }) => (
          <li className={classnames(styles.card)}>
            <Menu name={name} price={price} ingredients={ingredients} />
          </li>
        ))}
      </ul>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(({ user, text, rating }) => (
          <li className={classnames(styles.card, styles.review)}>
            <Review user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
