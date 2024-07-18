import { Menu } from "../menu/menu";
import { Review } from "../review/review";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>"{name}"</h2>
      <ul style={{ fontWeight: 800 }}>Menu:</ul>
      {menu.map(({ name, price, ingredients }) => (
        <Menu name={name} price={price} ingredients={ingredients} />
      ))}
      <ul style={{ fontWeight: 800 }}>Reviews:</ul>
      {reviews.map(({ user, text, rating }) => (
        <Review user={user} text={text} rating={rating} />
      ))}
    </div>
  );
};
