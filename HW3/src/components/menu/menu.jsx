import { ContainerCounter } from "../counter/container";
import { Ingredients } from "../ingredients/ingredients";

export const Menu = ({ name, price, ingredients }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      "{name}" - {price}$<p>Ingredients:</p>
      <p>
        {ingredients.map((ingredient) => (
          <Ingredients ingredient={ingredient} />
        ))}
      </p>
      <ContainerCounter />
    </div>
  );
};
