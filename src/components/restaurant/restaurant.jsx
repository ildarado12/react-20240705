import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant";
import { ReviewForm } from "../review-form/review-form";
import { useUser } from "../login-context/context";
import { Button } from "../button/button";
import { useState } from "react";
import { MenusList } from "../menus-list/menus-list";
import { ReviewsList } from "../reviews-list/reviews-list";
import styles from "./styles.module.css";

export const Restaurant = ({ id }) => {
  const { value } = useUser();

  const [info, setInfo] = useState(true);
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { name } = restaurant || {};

  if (!name) {
    return null;
  }

  return (
    <div className={styles.restaurant}>
      <h2 className={styles.nameRest}>"{name}"</h2>
      <Button text={`Menu`} disabled={info} onClick={() => setInfo(!info)} />
      <Button
        text={`Reviews`}
        disabled={!info}
        onClick={() => setInfo(!info)}
      />
      <div>{info ? <MenusList id={id} /> : <ReviewsList id={id} />}</div>
      <div>{value === "Login" ? null : <ReviewForm />}</div>
    </div>
  );
};
