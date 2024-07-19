import { Menu } from "../menu/menu";
import { ReviewForm } from "../review-form/review-form";
import { Review } from "../review/review";

export const Restaurant = ({ name, menu, reviews }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <h2>"{name}"</h2>

      <ul>
        {menu.map(({ name, price, ingredients }) => (
          <li>
            <Menu name={name} price={price} ingredients={ingredients} />
          </li>
        ))}
      </ul>
      <h3>Reviews:</h3>
      <ul>
        {reviews.map(({ user, text, rating }) => (
          <li>
            <Review user={user} text={text} rating={rating} />
          </li>
        ))}
      </ul>
      <ReviewForm />
    </div>
  );
};
