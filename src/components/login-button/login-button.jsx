import { useSelector } from "react-redux";
import { Button } from "../button/button";
import { useUser } from "../login-context/context";
import styles from "./styles.module.css";
import { selectUserById } from "../../redux/entities/user";

export const UserButton = () => {
  const { value, toggleUser } = useUser();

  const user = useSelector((state) => {
    return selectUserById(state, "a304959a-76c0-4b34-954a-b38dbf310360");
  });

  const { name } = user || {};

  return (
    <div>
      <h4 className={value === "Login" ? styles.hidden : styles.user}>
        {name}
      </h4>
      <Button
        text={value === "Login" ? "Login" : "Exit"}
        onClick={toggleUser}
      />
    </div>
  );
};
