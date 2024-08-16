import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart/cart";
import styles from "./styles.module.css";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  return (
    <div className={styles.cart}>
      Cart:
      {items.length ? (
        <ul>
          {items.map(({ itemId, amount }) => (
            <li className={styles.dishe} key={itemId}>
              <span className={styles.nameDishe}>{itemId}</span> - {amount}
            </li>
          ))}
        </ul>
      ) : (
        ` empty cart`
      )}
    </div>
  );
};
