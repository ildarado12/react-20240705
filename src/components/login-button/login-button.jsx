import { Button } from "../button/button";
import { useUser } from "../login-context/context";
import { users } from "../../constants/mock";
import styles from "./styles.module.css";

export const UserButton = () => {
  const { value, toggleUser } = useUser();

  return (
    <div>
      <h4 className={value === "Login" ? styles.hidden : styles.user}>
        {users[1].name}
      </h4>
      <Button
        text={value === "Login" ? "Login" : "Exit"}
        onClick={toggleUser}
      />
    </div>
  );
};
