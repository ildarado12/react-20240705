import styles from "./styles.module.css";

export const Review = ({ user, text, rating }) => {
  if (!user) {
    return null;
  }

  return (
    <div>
      <span className={styles.user}>{user}</span>:
      {text?.length ? <span> "{text}"</span> : null}
      <p className={styles.rating}>Rating: {rating}</p>
    </div>
  );
};
