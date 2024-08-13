import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { selectDisheById } from "../../redux/entities/dishes";
import { Ingredients } from "../ingredients/ingredients";
import { ContainerCounter } from "../counter/container";
import { useUser } from "../login-context/context";

export const Menu = ({ id }) => {
  const { value: user } = useUser();

  const menu = useSelector((state) => {
    return selectDisheById(state, id);
  });

  const { name, price, ingredients } = menu || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      <span className={styles.dishe}> "{name}"</span> - {price}$
      <p className={styles.ingredients}>Ingredients:</p>
      <p className={styles.ingredient}>
        {ingredients.map((ingredient) => (
          <Ingredients ingredient={ingredient} key={ingredient} />
        ))}
      </p>
      {user === `Login` ? null : <ContainerCounter min={0} max={99} step={1} />}
    </div>
  );
};
