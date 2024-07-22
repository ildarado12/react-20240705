import styles from "./styles.module.css";
import classnames from "classnames";

export const Review = ({ user, text, rating }) => {
  if (!user) {
    return null;
  }

  return (
    <div>
      <span className={classnames(styles.user)}>{user}</span>:
      {text?.length ? <span> "{text}"</span> : null}
      <p className={classnames(styles.rating)}>Rating: {rating}</p>
    </div>
  );
};
