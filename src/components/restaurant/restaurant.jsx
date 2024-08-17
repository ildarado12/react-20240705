import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import styles from "./styles.module.css";
import { ReviewForm } from "../review-form/review-form";
import { useUser } from "../login-context/context";
import { MenusPage } from "../menus-page/menus-page";
import { ReviewsPage } from "../reviews-page/reviews-page";
import { useParams } from "react-router-dom";

export const Restaurant = ({ id }) => {
  const { value } = useUser();

  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { name } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <h2 className={styles.nameRest}>"{name}"</h2>
      <h3 className={styles.nameH3}>Menu:</h3>
      <MenusPage id={id} />
      <h3 className={styles.nameH3}>Reviews:</h3>
      <ReviewsPage id={id} />
      {value === "Login" ? null : <ReviewForm />}
    </div>
  );
};
