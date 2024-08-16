import { useDispatch, useSelector } from "react-redux";
import {
  addCartItem,
  removeCartItem,
  selectCartItemAmountById,
} from "../../redux/ui/cart/cart";
import { Counter } from "../counter/counter";
import { selectDisheById } from "../../redux/entities/dishes";

export const RestaurantCartSection = ({ id }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => selectDisheById(state, id));

  const amount = useSelector((state) => selectCartItemAmountById(state, name));

  const addItem = () => {
    dispatch(addCartItem(name));
  };

  const removeItem = () => {
    dispatch(removeCartItem(name));
  };

  return (
    <div>
      <Counter value={amount} increment={addItem} decrement={removeItem} />
    </div>
  );
};
